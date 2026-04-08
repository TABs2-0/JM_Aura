from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer

ALLOWED_ORDER_FIELDS = {'product_name', 'product_price', 'product_category', 'created_at'}


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Products.objects.all()

        category = self.request.query_params.get('product_category')
        if category:
            queryset = queryset.filter(product_category=category)

        ordering = self.request.query_params.get('ordering')
        if ordering:
            field = ordering.lstrip('-')
            if field in ALLOWED_ORDER_FIELDS:
                queryset = queryset.order_by(ordering)

        return queryset

    @action(detail=False, methods=['GET'])
    def categories(self, request):
        """Get all unique product categories"""
        categories = Products.objects.values_list('product_category', flat=True).distinct()
        return Response({'categories': list(categories)})

    @action(detail=False, methods=['GET'])
    def by_category(self, request):
        """Filter products by category"""
        category = request.query_params.get('category', None)
        if category:
            products = Products.objects.filter(product_category=category)
            serializer = self.get_serializer(products, many=True)
            return Response(serializer.data)
        return Response({'error': 'Category parameter required'}, status=400)
