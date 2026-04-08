from products.models import Products
from  rest_framework import serializers


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields=["product_name","product_price","product_category","product_description","product_image"]
