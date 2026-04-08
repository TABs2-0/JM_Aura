from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cart
from .serializer import CartSerializer


class AddToCart(APIView):

    def post(self, request):
        cart = Cart.objects.create()
        return Response({
            "message": "Item added to cart",
            "cart_id": str(cart.cart_id)
        }, status=status.HTTP_201_CREATED)


class ViewCart(APIView):

    def get(self, request):
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)