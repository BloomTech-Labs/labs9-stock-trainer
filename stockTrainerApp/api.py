from rest_framework import serializers, viewsets
import quandl
import pandas as pd
# import json
from .models import User, Stock, Study, Indicator, Portfolio, Test

# DL data from the Quandl API
df = quandl.get("FRED/GDP", start_date="2001-12-31", end_date="2005-12-31")
df1 = df.reset_index()
print((df1))
print('###############')
# print(df)
# print('###############')
df_now_dict = df1.set_index('Date').to_dict()['Value']
for k, v in df_now_dict.items():
  k = str(k)[0:10]
  print(k,v)

  # print(Date, Value)
  # t.save()
  # print(t)
  # Test.objects.create(df_now_dict)
  


class UserSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = User
    fields = '__all__'

class UserViewset(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()


class StockSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Stock
    fields = '__all__'


class StockViewset(viewsets.ModelViewSet):
  serializer_class = StockSerializer
  queryset = Stock.objects.all()


class StudySerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Study
    fields = '__all__'


class StudyViewset(viewsets.ModelViewSet):
  serializer_class = StudySerializer
  queryset = Study.objects.all()


class IndicatorSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Indicator
    fields = '__all__'


class IndicatorViewset(viewsets.ModelViewSet):
  serializer_class = IndicatorSerializer
  queryset = Indicator.objects.all()


class PortfolioSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Portfolio
    fields = '__all__'


class PortfolioViewset(viewsets.ModelViewSet):
  serializer_class = PortfolioSerializer
  queryset = Portfolio.objects.all()

################


class TestSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Test
    fields = '__all__'


class TestViewset(viewsets.ModelViewSet):
  serializer_class = TestSerializer
  queryset = Test.objects.all()