from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4


# TODO: Create user model and other models;  django.contrib.auth.models.User allows multiple users to have accounts

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=25)
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)


class Stock(models.Model):
    symbol = models.CharField(max_length=25)
    name = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)


class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    stocks = models.ManyToManyField(Stock)
