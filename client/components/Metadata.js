/**
 * Created by tonnpa on 6/23/17.
 */

import React from 'react'
import {Table} from 'react-bootstrap'

const Metadata = (props) => (
    <Table hover responsive>
        <thead>
        <tr>
            <th>Column Name</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>SITE</td>
            <td>Location of data collection along Proctor Creek.</td>
        </tr>
        <tr>
            <td>WILDLIFE</td>
            <td>Type of organism recorded.</td>
        </tr>
        </tbody>
    </Table>
)

export default Metadata
