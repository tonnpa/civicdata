'use strict'

import React from 'react'
import Dataset from './Dataset'
import {Grid} from 'react-bootstrap'

const DatasetList = (props) => {
    const visibleDatasets = props.datasets.filter(dataset =>
        dataset.title.toLowerCase().indexOf(props.ui.filterText.toLowerCase()) !== -1)

    return (
        <div id="main">
            <div className="img-header text-hide">Civic Data</div>
            <Grid fluid={true} className="content">
                {visibleDatasets.map(dataset =>
                    <Dataset
                        key={dataset.id}
                        {...dataset}
                        previewContent={props.previewContent[dataset.id]}
                        onPreviewLoad={props.onPreviewLoad}
                        tab={props.ui.selectedTab[dataset.id]}
                        onSelectTab={props.onSelectTab}
                        metainfo={props.metainfo[dataset.id]}
                        onMetaLoad={props.onMetaLoad}
                        isImageOpen={props.ui.isImageOpen[dataset.id]}
                        onImageToggle={props.onImageToggle}
                    />
                )}
            </Grid>
        </div>
    )
}

export default DatasetList