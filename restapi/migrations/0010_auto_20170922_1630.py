# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-09-22 16:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0009_auto_20170623_1543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dataset',
            name='id',
            field=models.CharField(max_length=48, primary_key=True, serialize=False),
        ),
    ]
