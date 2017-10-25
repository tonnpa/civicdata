from rest_framework.viewsets import ModelViewSet
from restapi import models, serializers


class DatasetViewSet(ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer


class DataFileViewSet(ModelViewSet):
    queryset = models.DataFile.objects.all()
    serializer_class = serializers.DataFileSerializer


class MetaInfoViewSet(ModelViewSet):
    queryset = models.MetaInfo.objects.all()
    serializer_class = serializers.MetaInfoSerializer
    filter_fields = ('dataset_id',)
