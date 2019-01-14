from django.urls import path

from .views import charge, HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('charge/', charge, name='charge')
]
