from django.urls import path

from .views import AddToCart, ViewCart


urlpatterns = [
    path('add/', AddToCart.as_view()),
    path('view/', ViewCart.as_view()),
]