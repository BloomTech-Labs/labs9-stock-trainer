"""stockTrainerBackEnd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from django.urls import path, include

from rest_framework_jwt.views import obtain_jwt_token

from stockTrainerApp.api import UserViewset, StockViewset, StudyViewset, IndicatorViewset, PortfolioViewset, TestViewset


# Router to add viewsets
router = routers.DefaultRouter()
router.register(r'User', UserViewset)
router.register(r'Stock', StockViewset)
router.register(r'Study', StudyViewset)
router.register(r'Indicator', IndicatorViewset)
router.register(r'Portfolio', PortfolioViewset)
router.register(r'Test', TestViewset)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('stockTrainerApp.urls')),
    
    url(r'^', include('stockTrainerApp.urls')),
    url(r'^auth/token', obtain_jwt_token),

    # Local
    path('stockTrainer/', include('stockTrainerApp.urls'))
]
