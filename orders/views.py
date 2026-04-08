from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Order, Cart
from .serializers import OrderSerializer, CartSerializer


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Returns all orders. User-scoped filtering can be added once a user FK exists."""
        return Order.objects.all().order_by('-created_at')

    @action(detail=False, methods=['GET'])
    def history(self, request):
        """Get orders with DRF pagination."""
        queryset = self.get_queryset()
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['GET'])
    def by_status(self, request):
        """Filter orders by status"""
        status = request.query_params.get('status', None)
        if status:
            orders = self.get_queryset().filter(status=status)
            serializer = self.get_serializer(orders, many=True)
            return Response(serializer.data)
        return Response({'error': 'Status parameter required'}, status=400)


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
