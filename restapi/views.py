import pandas as pd
from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from restapi import models, serializers
from .constants import FileFormats


class DatasetViewSet(ModelViewSet):
    queryset = models.Dataset.objects.all().order_by('title')
    serializer_class = serializers.DatasetSerializer


def preview(request):
    dataset = models.Dataset.objects.get(pk=request.GET['id'])
    if dataset.format == FileFormats.EXCEL:
        data = pd.read_excel("assets/data/{}".format(dataset.file_name))
    elif dataset.format == FileFormats.CSV:
        data = pd.read_csv("assets/data/{}".format(dataset.file_name), nrows=20)
    else:
        # TODO: handle shapefile and other formats
        data = pd.DataFrame()

    data.fillna('', inplace=True)
    return JsonResponse({'results': data.head(10).to_dict(orient='records')})
