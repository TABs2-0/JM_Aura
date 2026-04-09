# newsletter/serializers.py
from rest_framework import serializers
from newsletter.models import Subscription, Newsletter


class SubscribeSerializer(serializers.Serializer):
    name_field = serializers.CharField(required=False, allow_blank=True)
    email_field = serializers.EmailField()


class BroadcastSerializer(serializers.Serializer):
    newsletter_slug = serializers.SlugField()
    subject = serializers.CharField()
    html_message = serializers.CharField()
    text_message = serializers.CharField(required=False, allow_blank=True)
