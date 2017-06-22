/**
 * Created by tonnpa on 5/25/17.
 */
'use strict'

import React from 'react'
import Tag from './Tag'
import {TagStyles} from '../constants'

function parseDate(date_from, date_to) {
    if (date_from === date_to) {
        return date_from
    }
    return `${date_from} - ${date_to}`
}

const TagList = ({date_from, date_to, files}) => {
    const formats = files.map(file => file.format)
    const formatTags = formats.map((file_format, idx) =>
        <li key={idx}><Tag key={`format-${idx}`} tagStyle={TagStyles.FORMAT} text={file_format}/></li>
    )

    return (
        <ul className="list-inline">
            <li><Tag key="date" tagStyle={TagStyles.DATE} text={parseDate(date_from, date_to)}/></li>
            {formatTags}
        </ul>
    )
}

export default TagList