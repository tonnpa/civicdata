"use strict"

import React from "react"
import Dataset from "./Dataset"
import {Grid} from "react-bootstrap"

const DatasetList = ({datasets, filterText}) => {
    const visibleDatasets = datasets.filter(dataset =>
        dataset.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)

    return (
        <div id="main">
            <div className="img-header text-hide">Civic Data</div>
            <Grid fluid={true} className="content">
                {visibleDatasets.map(dataset =>
                    <Dataset
                        key={dataset.id}
                        {...dataset}
                    />
                )}
            </Grid>
        </div>
    )
}

export default DatasetList