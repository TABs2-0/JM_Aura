from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import  OrderSerializer

from .models import Order


class PlaceOrder(APIView):

    def post(self, request):
        product_name = request.data.get("product_name")
        product_qty = request.data.get("product_qty", 1)

        if not product_name:
            return Response(
                {"error": "product_name is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        order = Order.objects.create(
            product_name=product_name,
            product_qty=product_qty
        )

        serializer = OrderSerializer(order)

        return Response({
            "message": "Order placed successfully",
            "order": serializer.data
        }, status=status.HTTP_201_CREATED)


from django.shortcuts import render

# Create your views here.
