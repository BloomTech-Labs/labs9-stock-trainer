from rest_framework import serializers, viewsets
import quandl
import pandas as pd
import io
from .models import User, Stock, Study, Indicator, Portfolio, Test

# DL data from the Quandl API
df = quandl.get("FRED/GDP", start_date="2001-12-31", end_date="2005-12-31")
df1 = df.reset_index()
df2 = pd.to_datetime(df1['Date']).apply(lambda x: x.date())
# df1['Date'] = df1['Date'].to_pydatetime()
print(df2.to_dict())


# df_now_dicts = df1.to_dict()
# df2 = df1.set_index('Date')['Value'].to_dict()
# df2['Date'] = df2['Date'].to_pydatetime


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