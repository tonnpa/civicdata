from rest_framework.serializers import ModelSerializer
from restapi import models


class DatasetSerializer(ModelSerializer):
    class Meta:
        model = models.Dataset
        fields = '__all__'
