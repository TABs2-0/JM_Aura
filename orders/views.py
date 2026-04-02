from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Order, Cart
from .serializers import OrderSerializer, CartSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
    @action(detail=False, methods=['GET'])
    def history(self, request):
        """Get all orders (place holder for user-specific orders)"""
        orders = Order.objects.all().order_by('-created_at')
        serializer = self.get_serializer(orders, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['GET'])
    def by_status(self, request):
        """Filter orders by status"""
        status = request.query_params.get('status', None)
        if status:
            orders = Order.objects.filter(status=status)
            serializer = self.get_serializer(orders, many=True)
            return Response(serializer.data)
        return Response({'error': 'Status parameter required'}, status=400)


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
