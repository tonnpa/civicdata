from rest_framework.viewsets import ModelViewSet
from restapi.models import AtlantaTree
from restapi.serializers import AtlantaTreeSerializer
# Create your views here.


class AtlantaViewSet(ModelViewSet):
    queryset = AtlantaTree.objects.all()
    serializer_class = AtlantaTreeSerializer
