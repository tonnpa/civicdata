'use strict'

import React from 'react'
import {Image} from 'react-bootstrap'
import {TabTitles} from '../constants'

const Snapshot = ({image_file_name, tab}) => (
    <Image src={`/static/media/${image_file_name}`}
           className="img-thumbnail img-responsive center-block dataset-image"
           style={{display: (tab === TabTitles.PREVIEW) ? "none" : "inline"}}/>
)

export default Snapshot