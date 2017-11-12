from datetime import date
from django.db import models


class Contribution(models.Model):
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16, null=True)
    file_name = models.CharField(max_length=64)
    username = models.CharField(max_length=64)
    nickname = models.CharField(max_length=64)
    email = models.EmailField()
    submission_date = models.DateField(default=date.today())
    # TODO: description, image, image caption

    def __str__(self):
        return '{} | {} | {}'.format(self.title, self.collector, self.file_name)
