from django.contrib import admin
from restapi import models

admin.site.register(models.Dataset)
admin.site.register(models.DataFile)
admin.site.register(models.MetaInfo)
