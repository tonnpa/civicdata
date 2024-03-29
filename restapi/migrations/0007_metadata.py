# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-23 15:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0006_datafile_num_records'),
    ]

    operations = [
        migrations.CreateModel(
            name='Metadata',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feature', models.CharField(max_length=32)),
                ('description', models.TextField()),
                ('comment', models.TextField(null=True)),
                ('dataset_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restapi.Dataset')),
            ],
        ),
    ]
