/**
 * Created by tonnpa on 5/25/17.
 */
'use strict'

import React from 'react'
import Tag from './Tag'
import {FileFormats, TagStyles} from '../constants'

function getFormatTags(files) {
    const formats = files.map(file => file.format)
    return formats.map((file_format, idx) =>
        <li key={idx}><Tag key={`format-${idx}`} tagStyle={TagStyles.FORMAT} text={file_format}/></li>
    )
}

function getSizeTag(files) {
    let sizeTag = undefined
    files.forEach(file => {
        if (file.format !== FileFormats.SHAPEFILE) {
            sizeTag = (
                <li><Tag key="size" tagStyle={TagStyles.SIZE} text={`${file.size} rows`}/></li>
            )
        }
    })
    return sizeTag
}

function parseDate(date_from, date_to) {
    if (date_from === date_to) {
        return date_from
    }
    return `${date_from} - ${date_to}`
}



const TagList = ({date_from, date_to, files}) => (
    <ul className="list-inline">
        <li><Tag key="date" tagStyle={TagStyles.DATE} text={parseDate(date_from, date_to)}/></li>
        {getFormatTags(files)}
        {getSizeTag(files)}
    </ul>
)

export default TagList