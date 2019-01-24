from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    portfolio_id = models.ForeignKey('Portfolio', on_delete=models.CASCADE, null=True)
    premium = models.BooleanField(default=False)
    favorites = models.ManyToManyField('Stock')
    

class Study(models.Model):
    stock_name = models.ForeignKey('Stock', on_delete=models.CASCADE, null=True)
    parameter_id = models.ForeignKey('Parameter', on_delete=models.CASCADE, null=True)
    portfolio_id = models.ForeignKey('Portfolio', on_delete=models.CASCADE, null=True)
    start_date = models.CharField(max_length=20, blank=False, null=False)
    end_date = models.CharField(max_length=20, blank=False, null=False)
    data = models.TextField(default="{}", null=False, blank=False)
    

class Portfolio(models.Model):
    temp = models.CharField(max_length=25, default="abcd", null=True)


class Stock(models.Model):
    symbol = models.CharField(primary_key=True, max_length=5)
    name = models.CharField(max_length=25)
    price_close = models.IntegerField(default=0)


class Indicator(models.Model):
    indicator_name = models.CharField(primary_key=True, max_length=25)


class Parameter(models.Model):
    indicator_name = models.ForeignKey(Indicator, on_delete=models.CASCADE)
    indicator_parameters = models.IntegerField


class Test(models.Model):
    Date = models.DateField(default="2099-09-09")
    value = models.FloatField(default=0) 

