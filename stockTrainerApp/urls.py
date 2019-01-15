from django.conf.urls import url
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    url(r'^api/public$', views.public),
    url(r'^api/private$', views.private),
    url(r'^api/private-scoped$', views.private_scoped),
  
    # Temp home page
    path('', views.HomePageView.as_view(), name='home'),
    path('charge/', csrf_exempt(views.charge), name='charge')
]
