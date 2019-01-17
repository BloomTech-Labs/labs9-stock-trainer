import stripe
from functools import wraps
from jose import jwt
import json

from rest_framework.decorators import api_view
from django.conf import settings
from django.views.generic.base import TemplateView
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer, UserSerializerWithToken


stripe.api_key = settings.STRIPE_SECRET_TEST_KEY

# Create your views here.


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['STRIPE_PUBLISHABLE_TEST_KEY'] = settings.STRIPE_PUBLISHABLE_TEST_KEY
        # TODO: set this key to STRIPE_PUBLISHABLE_KEY post testing
        return context


def charge(request):
    if request.method == 'POST':
        # body of request is parsed by the loads function
        body = json.loads(request.body)
        print(body)
        # currently we're looking at the token only, but there we can add more to the body to id the user
        token = body['token']
        charge = stripe.Charge.create(
            amount=500,
            currency='usd',
            description="It's just stuff... Don't worry about it...",
            source=token
        )
        print(charge)
        print("status:", charge['status'])
        # we can change our jsonresponse depending on the error from stripe, or the status of the charge
        return JsonResponse({
            'message': 'The payment has been successful'
        })


@api_view(['GET'])
# Checks current logged in user's token and loads related static user data
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Auth0 check for granted scopes from access_token


def get_token_auth_header(request):
    """Obtains the Access Token from the Authorization Header
    """
    auth = request.META.get("HTTP_AUTHORIZATION", None)
    parts = auth.split()
    token = parts[1]

    return token


def requires_scope(required_scope):
    """Determines if the required scope is present in the Access Token
    Args:
        required_scope (str): The scope required to access the resource
    """
    def require_scope(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            token = get_token_auth_header(args[0])
            unverified_claims = jwt.get_unverified_claims(token)
            token_scopes = unverified_claims["scope"].split()
            for token_scope in token_scopes:
                if token_scope == required_scope:
                    return f(*args, **kwargs)
            response = JsonResponse(
                {'message': 'You don\'t have access to this resource'})
            response.status_code = 403
            return response
        return decorated
    return require_scope


def public(request):
    return JsonResponse({'message': 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'})


@api_view(['GET'])
def private(request):
    return JsonResponse({'message': 'Hello from a private endpoint! You need to be authenticated to see this.'})


@api_view(['GET'])
@requires_scope('read:messages')
def private_scoped(request):
    return JsonResponse("Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.")
