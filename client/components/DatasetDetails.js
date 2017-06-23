/**
 * Created by tonnpa on 6/11/17.
 */
'use strict'

import React from 'react'

import DownloadButton from './DownloadButton'
import TagList from './TagList'

const DatasetDetails = (props) => (
    <div className="dataset-description">
        <p><b>Collector:</b> {props.collector}</p>
        <p>{props.description}</p>
        <TagList date_from={props.date_from}
                 date_to={props.date_to}
                 files={props.files}/>
        <DownloadButton files={props.files}/>
    </div>
)

export default DatasetDetails