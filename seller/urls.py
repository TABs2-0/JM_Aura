# newsletter/urls.py
from django.urls import path
from .views import SubscribeView, BroadcastView

urlpatterns = [
    path("newsletter/subscribe/", SubscribeView.as_view(), name="newsletter-subscribe"),
    path("newsletter/broadcast/", BroadcastView.as_view(), name="newsletter-broadcast"),
]