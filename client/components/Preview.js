/**
 * Created by tonnpa on 6/11/17.
 */
'use strict'

import React from 'react'
import {Table} from 'react-bootstrap'

const TableHeader = ({previewContent}) => {
    const header = []
    if (previewContent) {
        previewContent.header.forEach((columnName, idx) => header.push(
            <th key={idx}>{columnName}</th>
        ))
    }
    return <thead><tr>{header}</tr></thead>
}

const TableBody = ({previewContent}) => {
    const body = []
    if (previewContent) {
        previewContent.body.forEach((row, idx) => body.push(
            <tr key={idx}>
                {row.map((cell, idx) => (<td key={idx}>{cell}</td>))}
            </tr>
        ))
    }
    return <tbody>{body}</tbody>
}

const Preview = ({previewContent}) => (
    <Table striped bordered condensed hover responsive>
        <TableHeader previewContent={previewContent}/>
        <TableBody previewContent={previewContent}/>
    </Table>
)

export default Preview