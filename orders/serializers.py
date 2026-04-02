from rest_framework import serializers
from .models import Order, Cart


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'order_id',
            'product_name',
            'product_qty',
            'status',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['order_id', 'created_at', 'updated_at']


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = [
            'cart_id',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['cart_id', 'created_at', 'updated_at']
