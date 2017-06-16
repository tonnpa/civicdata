/**
 * Created by tonnpa on 6/5/17.
 */
'use strict'

import React from 'react'
import FaDownload from 'react-icons/lib/fa/download'
import {DropdownButton, MenuItem} from 'react-bootstrap'

function parseFileName(file_name) {
    //check for multiple formats (indicated by ',')
    if (file_name.indexOf(',') === -1) {
        return [file_name]
    }
    return file_name.split(',')
}

const DownloadButton = ({file_name, format}) => {
    const file_names = parseFileName(file_name)
    if (file_names.length === 1) {
        return (
            <a href={`/static/data/${file_name}`}
               download={file_name}
               className="btn-sm btn-warning"
               role="button">Download <FaDownload/></a>
        )
    }
    const formats = format.split(',')
    return (
        <DropdownButton id="dataset-download" title="Download" bsSize="xsmall" bsStyle="warning">
            {file_names.map((name, idx) =>
                <MenuItem key={idx} eventKey={idx}
                          href={`/static/data/${name}`}
                          download={name}
                          style={{textAlign: "right"}}>
                      {formats[idx]} <FaDownload/>
                </MenuItem>
                )}
        </DropdownButton>
    )
}



export default DownloadButton