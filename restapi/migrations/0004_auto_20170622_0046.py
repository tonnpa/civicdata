# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-22 00:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0003_auto_20170622_0043'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dataset',
            name='file_name',
        ),
        migrations.RemoveField(
            model_name='dataset',
            name='format',
        ),
    ]
