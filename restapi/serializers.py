from rest_framework.serializers import ModelSerializer
from restapi.models import AtlantaTree


class AtlantaTreeSerializer(ModelSerializer):
    class Meta:
        model = AtlantaTree
        fields = '__all__'
