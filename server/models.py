from django.db import models


class Contribution(models.Model):
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16, null=True)
    file_name = models.CharField(max_length=64)
    # TODO: description, username, date of submission, image, image caption

    def __str__(self):
        return '{} | {} | {}'.format(self.title, self.collector, self.file_name)
