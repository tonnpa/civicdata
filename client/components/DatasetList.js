'use strict';

import React from "react";
import Dataset from "./Dataset";
import {Grid} from "react-bootstrap";

const DatasetList = ({datasets, onPreviewClick}) => (
    <div id="main">
        <div className="img-header text-hide">Civic Data</div>
        <Grid fluid={true} className="content">
            {datasets.map(dataset =>
                <Dataset
                    key={dataset.id}
                    {...dataset}
                    onPreviewClick={() => onPreviewClick(dataset.id)}
                />
            )}
        </Grid>
    </div>
);

export default DatasetList;