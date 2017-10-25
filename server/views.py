import pandas as pd

from django.http import JsonResponse
from django.shortcuts import render
from restapi import models
from restapi.constants import FileFormats


def index(request):
    return render(request, 'index.html')


def preview(request):
    data_file = models.DataFile.objects\
        .exclude(format=FileFormats.SHAPEFILE)\
        .get(dataset_id=request.GET['id'])

    if data_file.format == FileFormats.EXCEL:
        data = pd.read_excel("assets/datasets/{}".format(data_file.name), skip_footer=data_file.num_records - 20)
    elif data_file.format == FileFormats.CSV:
        data = pd.read_csv("assets/datasets/{}".format(data_file.name), nrows=20)
    else:
        # TODO: handle shapefile and other formats
        data = pd.DataFrame()

    data.fillna('', inplace=True)
    return JsonResponse({
        'columns': data.columns.tolist(),
        'values': data.values.tolist()
    })


def submit_dataset(request):
    print('==========================================')
    print(request.method)
    print(request.POST.dict())
    print(request.FILES)
    print('==========================================')
    return JsonResponse({
        'POST': request.POST.dict(),
        'FILES': request.FILES,
    })
