import pandas as pd
from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from restapi import models, serializers
from .constants import FileFormats


class DatasetViewSet(ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer


def preview(request):
    def get_preview_format(format):
        if ',' in format:
            formats = format.split(',')
            formats.remove(FileFormats.SHAPEFILE)
            return formats[0]
        return format

    def get_preview_file_name(file_name):
        if ',' in file_name:
            #TODO
            names = [name for name in file_name.split(',') if not name.endswith('zip')]
            return names[0]
        return file_name


    dataset = models.Dataset.objects.get(pk=request.GET['id'])
    format = get_preview_format(dataset.format)
    file_name = get_preview_file_name(dataset.file_name)

    if format == FileFormats.EXCEL:
        data = pd.read_excel("assets/data/{}".format(file_name))
    elif format == FileFormats.CSV:
        data = pd.read_csv("assets/data/{}".format(file_name), nrows=20)
    else:
        # TODO: handle shapefile and other formats
        data = pd.DataFrame()

    data.fillna('', inplace=True)
    return JsonResponse({'results': data.head(10).to_dict(orient='records')})
