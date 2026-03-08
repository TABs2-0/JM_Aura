from django.db import models

# Create your models here.
class Seller(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.full_name

