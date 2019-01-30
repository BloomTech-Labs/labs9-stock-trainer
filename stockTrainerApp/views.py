import stripe
import quandl
import json
import datetime
import pandas as pd
from functools import wraps
from jose import jwt
from decouple import config
import json
from rest_framework.decorators import api_view
from . models import Test, Stock, User, Portfolio, Study
from . serializers import TestSerializer, StudySerializer
from rest_framework import generics
from django.shortcuts import render

from rest_framework.decorators import api_view
from django.conf import settings
from django.views.generic.base import TemplateView
from django.http import JsonResponse
from django.http import HttpResponseRedirect
# from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer, UserSerializerWithToken


stripe.api_key = settings.STRIPE_SECRET_TEST_KEY

quandl.ApiConfig.api_key = config("QUANDL_API_KEY")


class TestListCreate(generics.ListCreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


def stock(request):
    
    if request.method != 'GET':
        return JsonResponse(status=405, data={
            'error': 'Please use get request'
        })

    stockName = request.GET.get('NAME', '')
    # without a name, hard to know what to request
    if stockName == '':
        return JsonResponse(status=400, data={
            'error': 'Please include stock symbol'
        })

    # the "2018-01-01" is the default value if STARTDATE isn't set
    startDate = request.GET.get('STARTDATE', "2018-01-01"
                                )
    try:
        datetime.datetime.strptime(startDate, '%Y-%m-%d')
    except ValueError:
        return JsonResponse(status=400, data={
            'error': 'Please include a valid date in the format YYYY-MM-DD'
        })
    endDate = request.GET.get('ENDDATE', "2018-01-02"
                              )
    try:
        datetime.datetime.strptime(endDate, '%Y-%m-%d')
    except ValueError:
        return JsonResponse(status=400, data={
            'error': 'Please include a valid date in the format YYYY-MM-DD'
        })

    # gets FIELDS, converts to uppercase, then splits into an array
    fields = request.GET.get('FIELDS', "Close").upper().split(',')

    # DL data from the Quandl API
    quandl.ApiConfig.api_key = config('QUANDL_API_KEY')
    try:
        df = quandl.get(f"WIKI/{stockName}", start_date=startDate,
                        end_date=endDate)
    except:
        # This might need to get changed to a more generic answer
        print("Query error: please change your inputs (possibly invaild NAME, STARTDATE, ENDDATE) or check your API "
              "key.")
        return JsonResponse(status=500, data={
            'error': 'query error'
        })
    # frustratingly enough is quandl doesn't have data due to something be impossible it won't error, it'll just
    # return an empty dataframe. For example requesting google stock from 1999, before they went public. This won't
    # pop if the dates are set wrong, but sometimes will if they're set to the same day.
    if df.empty:
        return JsonResponse(status=404, data={
            'error': 'Data was not found for this stock, please verify that the dates and stock symbol are valid and '
                     'try again '
        })

    returnObj = {'symbol': stockName, 'startDate': startDate,
                 'endDate': endDate, 'data': []}

    # check if study exists in the database, if it does, then it returns the study
    check_study = Study.objects.all().filter(stock_name=stockName, start_date=startDate, end_date=endDate)
    if check_study:
        print('already here')
        temp = {}
        for check_data in check_study.values("data"):
            # json.loads allow for our data to be "unstringified" so we can return it as readable data
            temp = json.loads(check_data['data'])
        returnObj['data'] = temp
        return JsonResponse(status=200, data=returnObj)

    # this moves the date from being a row key, to another column, then converts the whole dataframe to strings. Even
    # all the numbers. This is to avoid problems with handling the date
    df_r = df.reset_index().astype(str)

    # this preps the return value by iterating over all the df rows then shoving them inside the data array in
    # returnObj. I was unsure if I should use an object instead of an array but using a date as a key seemed much
    # messier then letting an array preserve order
    for index, row in df_r.iterrows():
        rowObj = {'date': row['Date']}

        # if 'OPEN' in fields:
        rowObj['open'] = row['Open']
        # if 'CLOSE' in fields:
        rowObj['close'] = row['Close']
        # if 'LOW' in fields:
        rowObj['low'] = row['Low']
        # if 'HIGH' in fields:
        rowObj['high'] = row['High']
        if 'EXDIVIDEND' in fields:
            rowObj['exdividend'] = row['Ex-Dividend']
        # if 'VOLUME' in fields:
        rowObj['volume'] = row['Volume']
        if 'SPLITRATIO' in fields:
            rowObj['splitRatio'] = row['Split Ratio']
        if 'ADJHIGH' in fields:
            rowObj['adjHigh'] = row['Adj. High']
        if 'ADJOPEN' in fields:
            rowObj['adjOpen'] = row['Adj. Open']
        if 'ADJCLOSE' in fields:
            rowObj['adjClose'] = row['Adj. Close']
        if 'ADJLOW' in fields:
            rowObj['adjLow'] = row['Adj. Low']
        if 'ADJVOLUME' in fields:
            rowObj['adjVolume'] = row['Adj. Volume']

        returnObj["data"].append(rowObj)

    string_json = json.dumps(returnObj["data"])
    stock = Stock.objects.all().filter(symbol=returnObj['symbol']).first()
    if not stock:
        stock = Stock(symbol=returnObj['symbol'])
        stock.save()
    # Data is being saved as a stringified json
    new_study = Study(start_date=returnObj["startDate"], end_date=returnObj["endDate"], data=string_json)
    new_study.save()
    stock.study_set.add(new_study)

    # TODO: Need to save study into user's portfolio when this route becomes protected.

    return JsonResponse(status=200, data=returnObj)


def favorite(request):
    # this route must have an access token attached
    if request.method == 'POST':
        # body should have stock symbol
        # i.e. {symbol: "AMZN"}
        username = get_username(request)
        body = json.loads(request.body)

        # user is found, and then stock is added to favorite
        user = User.objects.all().filter(username=username).first()
        stock = Stock.objects.all().filter(symbol=body.get('symbol')).first()
        if not user.premium and len(list(user.favorites.all())) >= 10:
            return JsonResponse(status=405, data={'message': 'You must be a premium user to have more than 10 favorites'})
        if not stock:
            # if stock doesn't exist in DB, creates one
            stock = Stock(symbol=body.get('symbol'))
            stock.save()
        user.favorites.add(stock)
        user = User.objects.all().filter(username=username)
        fav_ret = []
        for fav in list(user.values('favorites')):
            if fav['favorites'] is not None:
                fav_ret.append(fav['favorites'])
        return JsonResponse(status=200, data={'favorites': fav_ret})

    if request.method == 'DELETE':
        # body should contain stock symbol
        # i.e. {symbol: "AMZN"}
        username = get_username(request)
        body = json.loads(request.body)
        if not body.get('symbol'):
            return JsonResponse(status=400, data={'message': 'Please check if the stock symbol is in the request body'})
        user = User.objects.all().filter(username=username).first()
        stock = Stock.objects.all().filter(symbol=body.get('symbol')).first()
        user.favorites.remove(stock)
        user = User.objects.all().filter(username=username)
        fav_ret = []
        for fav in list(user.values('favorites')):
            if fav['favorites'] is not None:
                fav_ret.append(fav['favorites'])
        return JsonResponse(status=200, data={'favorites': fav_ret})

    return JsonResponse(status=404, data={'message': 'Please use a POST or DELETE request.'})


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['STRIPE_PUBLISHABLE_TEST_KEY'] = settings.STRIPE_PUBLISHABLE_TEST_KEY
        # TODO: set this key to STRIPE_PUBLISHABLE_KEY post testing
        return context


def get_username(request):
    # gets username from the token, should be something like github.asdfasdf or google-oauth2.asdfasdf
    token = jwt.decode(get_token_auth_header(request), OAUTH_CERT, algorithms=['RS256'],
                       audience='https://stock-trainer.auth0.com/api/v2/')
    username = token.get('sub').replace('|', '.')
    return username


# look into protecting this route, so that only logged in and users in DB can actually be charged
def charge(request):
    if request.method == 'POST':
        # username is taken from the request header
        username = get_username(request)
        # body of request is parsed by the loads function
        body = json.loads(request.body)
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
        if charge['status'] == 'succeeded': # hard coded for now, there are WAY better ways to check for this and errors
            print('payment success')
            # currently, whether a user is premium or not is a boolean, but should be updated to be an expiration date
            User.objects.all().filter(username=username).update(premium=True)
            return JsonResponse({
                'message': 'The payment has been successful'
            })
        else:
            print('payment failed')
            return JsonResponse({
                'message': 'The payment was not successful'
            })


# Oauth cert
# this was attempted to add to .env, but didn't work
OAUTH_CERT = """-----BEGIN CERTIFICATE-----
MIIDCTCCAfGgAwIBAgIJAhJkZiOLoPxpMA0GCSqGSIb3DQEBCwUAMCIxIDAeBgNVBAMTF3N0b2NrLXRyYWluZXIuYXV0aDAuY29tMB4XDTE5MDExMDIxMjMzNVoXDTMyMDkxODIxMjMzNVowIjEgMB4GA1UEAxMXc3RvY2stdHJhaW5lci5hdXRoMC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC8f5amxse1EMu0Thu8SBKmblU1W
ADJf2GIoxF7DnNR95R10kbsaXdTPjpTkTcFlUesnp6RKyCfnGMZ8OOLs2IXciuZ1TXSbTM0SF8OUN0HEy4PGkzFhdmqEBBQptMdAr2m1IOUMXH/muQzgqA5UjfI8tCu5TMqYKhCN4JRVjflKIZQ+/Deta6AHz9J50Z7amtaaPclT3qw6Ime8p6XXfoLVs2h0kPPUEB45iYYCBjyAdgbYUzj8Zgux+DNtklLsRTdrBnbIx4ZZRmgaJV6vwOXtfYnNVNFN1
4F+ns512XwTiydvnnNdiros9K7SicOXf/gF2NoebrvjdVSuODC6LDdAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFBvMhts6Gw+hFLqujhfpAJCTcEBjMA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAuXpXc4yD7ugwSjYoWeSvMeKqIiWdp1jRlxl5FCjnwMIQPdoCTQKmSbLhnl7LSkuD87GO1HVw/vgL3njnKm8
WPEEToVjaAN0lDkyGaEPeTfUc5fMhFJBdF1RdRwzSk8z9CN3hzTtUr9MOI+RKA2HyxWrX7qI8+NAne2DrPcFqSx42jhgh25s+af9LHpVHRIQBM6LiJr4Nrahf86BBocVfZN1W/COuev5I8cquZxh5Gd1KwHkZZPH3OqHfZmYkWgE8xi5M//p1ibRVUWo0H3nV+Ix1tSTc+kS1CZuUvds/BuNJFSe6KVoK8NPM5his2zbIOWD13PmkjcLnvTQlArodxw==
-----END CERTIFICATE-----"""

# @api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    username = get_username(request)

    user = User.objects.all().filter(username=username)
    # Can DRY this up probably
    if user:
        portfolio_id_dict = user.values('portfolio_id_id').first()
        portfolio_id = portfolio_id_dict.get('portfolio_id_id')
        studies = Study.objects.all().filter(portfolio_id=portfolio_id).values()
        favorites = list(user.values('favorites'))
        fav_ret = []
        for fav in favorites:
            if fav['favorites'] is not None:
                fav_ret.append(fav['favorites'])
        return JsonResponse({'portfolio': list(studies), 'favorites': fav_ret})
    else:
        # creates new user and portfolio if user does not exist.
        new_user = User.objects.create_user(username=username)
        new_user.save()
        new_portfolio = Portfolio.objects.create()
        new_portfolio.save()
        new_portfolio.user_set.add(new_user)
        # for some reason, new_user is just a string, need to requery for now, but there should be a more elegant
        # implementation for that
        user = User.objects.all().filter(username=username)
        portfolio_id_iter = user.values('portfolio_id_id')
        portfolio_id = 0
        for portfolio in portfolio_id_iter:
            portfolio_id = portfolio.get('portfolio_id_id')
        studies = Study.objects.all().filter(portfolio_id=portfolio_id).values()
        return JsonResponse({'portfolio': list(studies), 'favorites': []})


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
