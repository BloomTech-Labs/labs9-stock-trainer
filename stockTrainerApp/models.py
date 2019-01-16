from django.db import models
from django.contrib.auth.models import User
# from uuid import uuid4


# TODO: Create user model and other models;  django.contrib.auth.models.User allows multiple users to have accounts

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50)
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=25)
    # email = models.CharField(max_length=50)
    study_name = models.ForeignKey('Study', on_delete=models.CASCADE, default="NA")
    portfolio_name = models.ForeignKey('Portfolio', on_delete=models.CASCADE, default="NA")
    

class Study(models.Model):
    study_name = models.CharField(primary_key=True, unique=True, max_length=25, help_text='Pick a name for your study', default="NA")
    stock_name = models.ForeignKey('Stock', on_delete=models.CASCADE)
    indicator_name = models.ForeignKey('Indicator', on_delete=models.CASCADE)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)
    

class Portfolio(models.Model):
    portfolio_name = models.CharField(primary_key=True, unique=True, max_length=25, help_text='Pick a name for your portfolio', default="NA")
    study_name = models.ForeignKey(Study, on_delete=models.CASCADE, default="NA")


class Stock(models.Model):
    symbol = models.CharField(max_length=5, help_text='Enter Stock Symbol')
    name = models.CharField(primary_key=True, max_length=25, help_text='Enter Stock Name')
    price_close = models.IntegerField(default=0)


class Indicator(models.Model):
    indicator_name = models.CharField(primary_key=True, max_length=25, help_text='Enter Stock Name')
    indicator_parameters = models.IntegerField # should we save a new one per parameter...?


class Test(models.Model):
    Date = models.DateField(default="2099-09-09")
    value = models.FloatField(default=0) 

