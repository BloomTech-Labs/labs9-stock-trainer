from rest_framework import serializers, viewsets

from .models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = User
    fields = ('username', 'firstname', 'lastname')

class UserViewset(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()