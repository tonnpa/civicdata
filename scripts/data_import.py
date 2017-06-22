import pandas as pd

from restapi import models
from restapi.constants import FileFormats

def import_dataset_information():
    # delete existing records
    models.Dataset.objects.all().delete()
    models.DataFile.objects.all().delete()

    # import from spreadsheet
    dataset_df = pd.read_excel('assets/data/DatasetInformation.xlsx')
    for record in dataset_df.itertuples():
        try:
            dataset = models.Dataset(
                id=record.ID,
                title=record.Title,
                collector=record.Collector,
                date_from=record.DateFrom,
                date_to=record.DateTo,
                description=record.Description,
                caption=record.ImageCaption,
                image_file_name=record.ImageFileName,
            )
            dataset.save()
        except ValueError as ex:
            print(ex)
    print('Importing Dataset Information has finished.')

    files_df = pd.read_excel('assets/data/DatasetFiles.xlsx')
    for record in files_df.itertuples():
        try:
            data_file = models.DataFile(
                dataset_id=models.Dataset(record.ID),
                name=record.FileName,
                format=record.Format,
            )
            if record.Format == FileFormats.CSV:
                data_file.num_records = len(pd.read_csv('assets/data/{}'.format(record.FileName)))
            elif record.Format == FileFormats.EXCEL:
                data_file.num_records = len(pd.read_excel('assets/data/{}'.format(record.FileName)))
            data_file.save()
        except ValueError as ex:
            print(ex)
    print('Importing Dataset Files has finished.')
