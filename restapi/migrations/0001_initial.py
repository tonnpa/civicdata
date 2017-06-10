# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-10 15:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.CharField(max_length=24, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=96)),
                ('collector', models.CharField(max_length=64)),
                ('date_from', models.CharField(max_length=16)),
                ('date_to', models.CharField(max_length=16)),
                ('description', models.TextField()),
                ('format', models.CharField(max_length=16)),
                ('file_name', models.CharField(max_length=64)),
                ('image_file_name', models.CharField(max_length=64)),
            ],
        ),
    ]
