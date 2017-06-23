from rest_framework.serializers import ModelSerializer
from restapi import models


class DatasetSerializer(ModelSerializer):
    class Meta:
        model = models.Dataset
        fields = '__all__'


class DataFileSerializer(ModelSerializer):
    class Meta:
        model = models.DataFile
        fields = '__all__'


class MetaInfoSerializer(ModelSerializer):
    class Meta:
        model = models.MetaInfo
        fields = '__all__'
