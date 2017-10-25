/**
 * Created by tonnpa on 6/5/17.
 */
'use strict'

import React from 'react'
import FaDownload from 'react-icons/lib/fa/download'
import {DropdownButton, MenuItem} from 'react-bootstrap'

function trackDownload(datasetId) {
    return () => gtag('event', 'download_dataset', {
        'event_category': 'datasets',
        'event_action': 'download',
        'event_label': datasetId,
    })
}

const DownloadButton = ({files}) => {
    if (files.length === 1) {
        const file_name = files[0].name
        return (
            <a href={`/public/datasets/${file_name}`}
               download={file_name}
               className="btn-sm btn-warning"
               role="button"
               onClick={trackDownload(file_name)}> Download <FaDownload/></a>
        )
    }
    return (
        <DropdownButton id="dataset-download" title="Download" bsSize="xsmall" bsStyle="warning">
            {files.map((file, idx) =>
                <MenuItem key={idx} eventKey={idx}
                          href={`/public/datasets/${file.name}`}
                          download={file.name}
                          style={{textAlign: "right"}}
                          onClick={trackDownload(file.name)}>{file.format} <FaDownload/></MenuItem>
            )}
        </DropdownButton>
    )
}

export default DownloadButton