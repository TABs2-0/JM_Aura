from rest_framework import serializers
from .models import Products


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = [
            'id',
            'product_name',
            'product_price',
            'product_description',
            'product_image',
            'product_stock',
            'product_category',
        ]
        read_only_fields = ['id']
