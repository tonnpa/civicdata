from rest_framework.routers import DefaultRouter
from restapi import views

router = DefaultRouter()
router.register(r'api/datainfo', views.DatasetViewSet)
router.register(r'api/datafiles', views.DataFileViewSet)
router.register(r'api/metainfo', views.MetaInfoViewSet)

urlpatterns = router.urls
