from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.validators import validate_email
from django.core.exceptions import ValidationError as DjangoValidationError
from django.db import IntegrityError
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class LoginView(APIView):
    """Authenticate a user and return a DRF token."""
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username') or request.data.get('email')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'detail': 'Username/email and password are required.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Allow login by email
        if '@' in username:
            try:
                user_obj = User.objects.get(email=username)
                username = user_obj.username
            except User.DoesNotExist:
                pass

        user = authenticate(request, username=username, password=password)
        if user is None:
            return Response(
                {'detail': 'Invalid credentials.'},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        })


class RegistrationView(APIView):
    """Register a new user and return a DRF token."""
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email', '')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'detail': 'Username and password are required.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate email format if provided
        if email:
            try:
                validate_email(email)
            except DjangoValidationError:
                return Response(
                    {'detail': 'Enter a valid email address.'},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            if User.objects.filter(email=email).exists():
                return Response(
                    {'detail': 'A user with that email already exists.'},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
        except IntegrityError:
            return Response(
                {'detail': 'A user with that username already exists.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        }, status=status.HTTP_201_CREATED)
