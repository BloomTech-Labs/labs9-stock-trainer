import stripe
import quandl
import json
import pandas as pd
from functools import wraps
from jose import jwt
from rest_framework.decorators import api_view

from django.shortcuts import render
from django.conf import settings
from django.views.generic.base import TemplateView
from django.http import JsonResponse



stripe.api_key = settings.STRIPE_SECRET_TEST_KEY

# Create your views here.

def stock(request):
    # DL data from the Quandl API
    quandl.ApiConfig.api_key = 'SX5vBsMh7ovP9Pyqp-w7'
    df = quandl.get("WIKI/AAPL", start_date="2001-12-31", end_date="2002-01-31")
    df_r= df.reset_index()
    df1 = df_r['Open']
    print('##############')
    dfl = df1.tolist()
    dfl = str(dfl)
    print(type(dfl))
    # below we turn the date index into a column
    # df1 = df.reset_index()
    # df2 = df1.set_index('Date').to_dict()['Value']    
    # values = str(df2.values())
    # print(type(values))
    # vals = str(df2.values())
    
    return render(request, 'stock.html', {'dfl': dfl})





class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['STRIPE_PUBLISHABLE_TEST_KEY'] = settings.STRIPE_PUBLISHABLE_TEST_KEY
        # TODO: set this key to STRIPE_PUBLISHABLE_KEY post testing
        return context

def charge(request):
    if request.method == 'POST':
        charge = stripe.Charge.create(
            amount=500,
            currency='usd',
            description="It's just stuff... Don't worry about it...",
            source=request.POST['stripeToken']
        )
        return render(request, 'charge.html')

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
            response = JsonResponse({'message': 'You don\'t have access to this resource'})
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