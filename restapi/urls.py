from rest_framework.routers import DefaultRouter
from restapi import views

router = DefaultRouter()
router.register(r'^api/atltrees', views.AtlantaViewSet)
router.register(r'^api/datainfo', views.DatasetViewSet)

urlpatterns = router.urls
