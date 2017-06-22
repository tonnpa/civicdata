# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-22 01:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0004_auto_20170622_0046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datafile',
            name='name',
            field=models.CharField(max_length=64, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterUniqueTogether(
            name='datafile',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='datafile',
            name='id',
        ),
    ]
