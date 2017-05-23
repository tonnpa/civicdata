from django.db import models


class Dataset(models.Model):
    id = models.CharField(max_length=24, primary_key=True)
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16)
    description = models.TextField()
    file_name = models.CharField(max_length=64)
    format = models.CharField(max_length=16)
