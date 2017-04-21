import pandas as pd

from restapi import models


def import_atlanta_trees():
    trees_df = pd.read_excel('data/TreesAtlanta.xlsx')
    for record in trees_df.itertuples():
        if record[0] > 1000:
            break

        if record[0] % 100 == 0:
            print('Imported {} records'.format(record[0]))
        try:
            tree = models.AtlantaTree(
                long_text=record[1],
                medium_text=record[2],
                latitude=record.Latitude,
                longitude=record.Longitude,
            )
            tree.save()
        except ValueError as ex:
            print(ex)
