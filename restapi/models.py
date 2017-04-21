from django.db import models


class AtlantaTree(models.Model):
    long_text = models.CharField(max_length=160, blank=True)
    medium_text = models.CharField(max_length=96, blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
