from django.db import models


class Dataset(models.Model):
    id = models.CharField(max_length=24, primary_key=True)
    title = models.CharField(max_length=96)
    collector = models.CharField(max_length=64)
    date_from = models.CharField(max_length=16)
    date_to = models.CharField(max_length=16)
    description = models.TextField()
    caption = models.TextField(null=True)
    image_file_name = models.CharField(max_length=64)

    class Meta:
        ordering = ('title',)


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
