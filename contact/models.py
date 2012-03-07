from django.db import models

# Create your models here.
class Person(models.Model):
   name = models.CharField(max_length=200)
   email = models.CharField(max_length=200)

class Message(models.Model):
   author = models.ForeignKey(Person)
   message = models.CharField(max_length=200)
   msg_date = models.DateTimeField('date send')
