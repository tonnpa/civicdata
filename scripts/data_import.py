import pandas as pd

from restapi import models


def import_dataset_information():
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
                format=record.Format,
                file_name=record.FileName,
                image_file_name=record.ImageFileName,
            )
            dataset.save()
        except ValueError as ex:
            print(ex)

    print('Importing Dataset Information has finished.')
