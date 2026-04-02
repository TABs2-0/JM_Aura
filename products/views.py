from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    
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
