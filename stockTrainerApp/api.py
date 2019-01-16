from rest_framework import serializers, viewsets
import quandl
import pandas as pd
# import json
from .models import User, Stock, Study, Indicator, Portfolio, Test

# # DL data from the Quandl API
# df = quandl.get("FRED/GDP", start_date="2001-12-31", end_date="2005-12-31")
# # below we turn the date index into a column
# df1 = df.reset_index()
# # # below we trim and turn date into str
# # df1['Date'] = df1['Date'].apply(lambda x: str(x)[0:10])
# print(df1)
# # # below we convert dataframe to dict for easy storage
# df_now_dict = df1.set_index('Date').to_dict()['Value']
# kees = str(df_now_dict.keys())
# print(type(kees))
# vals = str(df_now_dict.values())
# print(type(vals))
# print((df_now_dict))
# for k, v in df_now_dict.items():
#   t = Test(str(k).strip(), str(v).strip())
#   t.save()

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