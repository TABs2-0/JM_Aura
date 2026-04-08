from rest_framework import serializers
from products.models import Products

class ProductsSerializer(serializers.ModelSerializer):
    product_image = serializers.SerializerMethodField()

    class Meta:
        model = Products
        fields = [
            "product_name",
            "product_price",
            "product_category",
            "product_description",
            "product_image"
        ]

    def get_product_image(self, obj):
        request = self.context.get('request')
        if obj.product_image:
            return request.build_absolute_uri(obj.product_image.url)
        return None