from django.db import models


class AtlantaTree(models.Model):
    long_text = models.CharField(max_length=160, blank=True)
    medium_text = models.CharField(max_length=96, blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()


class Dataset(models.Model):
    id = models.CharField(max_length=24, primary_key=True)
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16)
    description = models.TextField()
