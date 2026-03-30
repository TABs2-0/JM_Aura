from django.urls import path
from products.views import ProductList

urlpatterns = [
    path('search/', ProductList.as_view(), name='products'),
]
