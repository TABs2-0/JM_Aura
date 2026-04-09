# newsletter/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# newsletter/views.py
from newsletter.models import Newsletter, Subscription, Message, Article
from .serializer import SubscribeSerializer, BroadcastSerializer


class SubscribeView(APIView):
    def post(self, request):
        serializer = SubscribeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        newsletter = Newsletter.objects.get(slug="default")

        subscription, created = Subscription.objects.get_or_create(
            newsletter=newsletter,
            email_field=serializer.validated_data["email_field"],
            defaults={"name_field": serializer.validated_data.get("name_field", "")},
        )

        if not created and subscription.unsubscribed:
            subscription.unsubscribed = False
            subscription.save()

        return Response(
            {"detail": "Check your inbox to confirm your subscription."},
            status=status.HTTP_201_CREATED,
        )




class BroadcastView(APIView):
    def post(self, request):
        serializer = BroadcastSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        try:
            newsletter = Newsletter.objects.get(slug=data["newsletter_slug"])
        except Newsletter.DoesNotExist:
            return Response({"detail": "Newsletter not found."}, status=404)

        message = Message.objects.create(
            newsletter=newsletter,
            title=data["subject"],
            slug=data["subject"].lower().replace(" ", "-")[:50],
        )

        # Content goes in Article objects attached to the message
        Article.objects.create(
            post=message,
            sortorder=0,
            title=data["subject"],
            text=data["html_message"],
        )

        message.submit()

        return Response({"detail": f"Broadcast queued for '{newsletter.title}'."})
