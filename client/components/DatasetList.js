'use strict'

import React from 'react'
import Dataset from './Dataset'
import {Grid, Image} from 'react-bootstrap'

const DatasetList = (props) => {
    const visibleDatasets = props.datasets.filter(dataset =>
        dataset.title.toLowerCase().indexOf(props.ui.filterText.toLowerCase()) !== -1)

    if (visibleDatasets.length === 0) {
        return (
            <div className="empty-search">
                <h2>No datasets to show. &nbsp;
                    <Image src="/static/icons/characters/png/depressed.png"/></h2>
                <p className="attribution">
                    Icon made by <a href="https://www.swifticons.com/" target="_blank">
                    Swifticons </a>from <a href="https://www.flaticon.com/" target="_blank">
                    www.flaticon.com</a>.
                </p>
            </div>
        )
    }
    return (
        <div id="dataset-list">
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