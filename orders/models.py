import uuid

from django.db import models


# Create your models here.

class Order(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),  # Initial state when order is created
        ('AWAITING_PAYMENT', 'Awaiting Payment'),  # Payment initiated but not completed
        ('PAYMENT_FAILED', 'Payment Failed'),  # Payment attempt failed
        ('PROCESSING', 'Processing'),  # Payment successful, order being prepared
        ('PAYMENT_COMPLETED', 'Payment Completed'),
        ('DELIVERED', 'Delivered'),
        ('CANCELLED', 'Cancelled'),
    )
    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField(max_length=100)
    product_qty = models.PositiveSmallIntegerField(default=1)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f" the order of {self.product_name} was created at {self.created_at}"


class Cart(models.Model):
    cart_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
