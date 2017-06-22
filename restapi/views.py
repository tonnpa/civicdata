import pandas as pd
from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from restapi import models, serializers
from .constants import FileFormats


class DatasetViewSet(ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer


class DataFileViewSet(ModelViewSet):
    queryset = models.DataFile.objects.all()
    serializer_class = serializers.DataFileSerializer


def preview(request):
    data_file = models.DataFile.objects\
        .exclude(format=FileFormats.SHAPEFILE)\
        .get(dataset_id=request.GET['id'])

    if data_file.format == FileFormats.EXCEL:
        data = pd.read_excel("assets/data/{}".format(data_file.name))
    elif data_file.format == FileFormats.CSV:
        data = pd.read_csv("assets/data/{}".format(data_file.name), nrows=20)
    else:
        # TODO: handle shapefile and other formats
        data = pd.DataFrame()

    data.fillna('', inplace=True)
    return JsonResponse({'results': data.head(10).to_dict(orient='records')})
