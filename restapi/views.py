from rest_framework.viewsets import ModelViewSet
from restapi import models, serializers
# Create your views here.


class DatasetViewSet(ModelViewSet):
    queryset = models.Dataset.objects.all()
    serializer_class = serializers.DatasetSerializer

