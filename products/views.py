from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from products.models import Products
from products.serializer import ProductsSerializer


class ProductList(APIView):

    def get(self, request, format=None):
        query = request.query_params.get('query')
        category_filter = request.query_params.get('product_category')
        products = Products.objects.all()
        if query:
            products = products.filter(name__icontains=query)
        if category_filter:
            products = products.filter(state__iexact=category_filter)

        serializer = ProductsSerializer(products[:10], many=True) # provide the first 10 Db record
        return Response(serializer.data)

# Create your views here.
