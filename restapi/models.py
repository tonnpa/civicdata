from django.db import models


class Dataset(models.Model):
    id = models.CharField(max_length=48, primary_key=True)
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16)
    description = models.TextField()
    caption = models.TextField(null=True)
    image_file_name = models.CharField(max_length=64)

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return '{} | {} | {}'.format(self.id, self.title, self.collector)


class DataFile(models.Model):
    dataset_id = models.ForeignKey(Dataset, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=64, unique=True, primary_key=True)

    FORMAT_CHOICES = (
        ('csv', 'csv'),
        ('excel', 'excel'),
        ('shapefile', 'shapefile')
    )
    format = models.CharField(max_length=16,
                              choices=FORMAT_CHOICES)
    num_records = models.IntegerField(null=True)

    def __str__(self):
        return '{} | {}'.format(self.name, self.format)


class MetaInfo(models.Model):
    dataset_id = models.ForeignKey(Dataset)
    feature = models.CharField(max_length=32)
    description = models.TextField()
    comment = models.TextField(null=True)

    class Meta:
        unique_together = ('dataset_id', 'feature')

    def __str__(self):
        return '{} | {}'.format(self.dataset_id, self.feature)
