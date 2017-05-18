from rest_framework.serializers import ModelSerializer
from restapi import models


class AtlantaTreeSerializer(ModelSerializer):
    class Meta:
        model = models.AtlantaTree
        fields = '__all__'


class DatasetSerializer(ModelSerializer):
    class Meta:
        model = models.Dataset
        fields = '__all__'
