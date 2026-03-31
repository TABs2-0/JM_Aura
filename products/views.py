from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from products.models import Products
from products.serializer import ProductsSerializer


class ProductList(APIView):

    def get(self, request, format=None):
        products = Products.objects.all()


        query = request.query_params.get('query')
        if query:
            products = products.filter(product_name__icontains=query)


        category = request.query_params.get('category')
        if category:
            products = products.filter(product_category__iexact=category)


        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')

        if min_price:
            products = products.filter(product_price__gte=min_price)
        if max_price:
            products = products.filter(product_price__lte=max_price)


        is_available = request.query_params.get('is_available')
        if is_available:
            if is_available.lower() == 'true':
                products = products.filter(is_available=True)
            elif is_available.lower() == 'false':
                products = products.filter(is_available=False)


        products = products[:10]

        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)