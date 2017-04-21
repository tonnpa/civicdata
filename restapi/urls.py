from rest_framework.routers import DefaultRouter
from restapi.views import AtlantaViewSet

router = DefaultRouter()
router.register(r'^api/atltrees', AtlantaViewSet)

urlpatterns = router.urls
