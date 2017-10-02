import pandas as pd

from restapi import models
from restapi.constants import FileFormats


def import_dataset_information():
    # delete existing records
    models.Dataset.objects.all().delete()
    models.DataFile.objects.all().delete()
    models.MetaInfo.objects.all().delete()

    # import from spreadsheet
    dataset_df = pd.read_excel('assets/datasets/DatasetInformation.xlsx')
    dataset_df = dataset_df.where(pd.notnull(dataset_df), None)
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
    print('Importing Dataset Information has finished: {} dataset founds'.format(len(dataset_df)))

    files_df = pd.read_excel('assets/datasets/DatasetFiles.xlsx')
    for record in files_df.itertuples():
        try:
            data_file = models.DataFile(
                dataset_id=models.Dataset(record.ID),
                name=record.FileName,
                format=record.Format,
            )
            if record.Format == FileFormats.CSV:
                data_file.num_records = len(pd.read_csv('assets/datasets/{}'.format(record.FileName)))
            elif record.Format == FileFormats.EXCEL:
                data_file.num_records = len(pd.read_excel('assets/datasets/{}'.format(record.FileName)))
            data_file.save()
        except ValueError as ex:
            print(ex)
    print('Importing Dataset Files has finished: {} file found.'.format(len(files_df)))

    metainfo_df = pd.read_excel('assets/datasets/DatasetMetaInformation.xlsx')
    metainfo_df= metainfo_df.where(pd.notnull(metainfo_df), None)
    for record in metainfo_df.itertuples():
        try:
            meta_info = models.MetaInfo(
                dataset_id=models.Dataset(record.DatasetId),
                feature=record.Feature,
                description=record.Description,
                comment=record.Comment,
            )
            meta_info.save()
        except ValueError as ex:
            print(ex)
    print('Importing Meta Information has finished: {} column description found.'.format(len(metainfo_df)))
