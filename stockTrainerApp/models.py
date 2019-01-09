from django.db import models
from uuid import uuid4

# Create your models here.

class User(models.Model):
  username = models.CharField(max_length=25)
  firstname = models.CharField(max_length=25)
  lastname = models.CharField(max_length=25)
