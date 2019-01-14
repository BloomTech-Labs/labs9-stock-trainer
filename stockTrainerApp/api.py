from rest_framework import serializers, viewsets

from .models import User, Stock, Study, Indicator, Portfolio

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
