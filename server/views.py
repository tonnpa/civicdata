import os
import pandas as pd

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from restapi.models import DataFile
from restapi.constants import FileFormats
from server.models import Contribution


def index(request):
    return render(request, 'index.html')


def preview(request):
    data_file = DataFile.objects\
        .exclude(format=FileFormats.SHAPEFILE)\
        .get(dataset_id=request.GET['id'])

    if data_file.format == FileFormats.EXCEL:
        data = pd.read_excel(os.path.join(settings.PUBLIC_DIR, 'datasets', data_file.name),
                             skip_footer=data_file.num_records - 20)
    elif data_file.format == FileFormats.CSV:
        data = pd.read_csv(os.path.join(settings.PUBLIC_DIR, 'datasets', data_file.name),
                           nrows=20)
    else:
        # TODO: handle shape file and other formats
        # TODO: handle shape file and other formats
        data = pd.DataFrame()

    data.fillna('', inplace=True)
    return JsonResponse({
        'columns': data.columns.tolist(),
        'values': data.values.tolist()
    })


def submit_dataset(request):
    dataset = request.FILES.get('file')
    # check for attached file
    if not dataset:
        return JsonResponse({
            'ERROR': 'Missing dataset file.'
        }, status=400)

    # limit maximum file size
    if dataset.size > 200 * 1024 * 1024: # MB
        return JsonResponse({
            'ERROR': 'Dataset too large.'
        })

    # check if a file exists with the same name
    dataset_file_path = os.path.join(settings.MEDIA_ROOT, dataset.name)
    if os.path.exists(dataset_file_path):
        return JsonResponse({
            'ERROR': 'Dataset file name already exists.'
        }, status=501)

    # create contribution instance
    try:
        contribution = Contribution(
            title=request.POST.get('title'),
            collector=request.POST.get('collector'),
            date_from=request.POST.get('yearFrom'),
            date_to=request.POST.get('yearTo'),
            file_name=dataset.name,
            username=request.POST.get('name'),
            nickname=request.POST.get('nickname'),
            email=request.POST.get('email'),
        )
        contribution.save()
    except ValueError as ex:
        print(ex)
        return JsonResponse({
            'ERROR': 'Database error.'
        }, status=500)

    # save uploaded file to server
    with open(dataset_file_path, 'wb') as saved_file:
        for chunk in dataset.chunks():
            saved_file.write(chunk)

    return JsonResponse({
        'POST': request.POST.dict(),
        'COOKIES': request.COOKIES,
    })
