/**
 * Created by tonnpa on 6/11/17.
 */
'use strict'

import React from 'react'

import DownloadButton from './DownloadButton'
import TagList from './TagList'

const DatasetDetails = (props) => (
    <div className="dataset-description">
        <span><b>Collector:</b> {props.collector}</span>
        <p>{props.description}</p>
        <TagList date_from={props.date_from}
                 date_to={props.date_to}
                 format={props.format}/>
        <DownloadButton file_name={props.file_name}/>
    </div>
)

export default DatasetDetails