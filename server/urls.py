from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^preview$', views.preview),
    url(r'^submit$', views.submit_dataset),
]