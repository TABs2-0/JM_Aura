from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Seller


class SellerSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Seller
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'address',
            'password',
        ]
        read_only_fields = ['id']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # Only hash when a new plain-text password is explicitly submitted.
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)
