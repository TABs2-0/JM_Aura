from rest_framework import serializers
from .models import Seller


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'address',
        ]
        read_only_fields = ['id']
        # Don't include password in responses
        extra_kwargs = {
            'password': {'write_only': True}
        }
