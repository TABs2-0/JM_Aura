import uuid

from django.db import models

# Create your models here.

class Products(models.Model): #may have to change ImageField to URL Field BCS during deployement the files are lost some times

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField( max_length=100)
    product_price = models.FloatField()
    product_description = models.TextField()
    product_image = models.ImageField(upload_to='products/')
    product_stock = models.IntegerField()
    product_category = models.CharField( max_length=100)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.product_name