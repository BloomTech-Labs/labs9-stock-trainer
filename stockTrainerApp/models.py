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

