/**
 * Created by tonnpa on 6/23/17.
 */

import React from 'react'
import {Table} from 'react-bootstrap'

const MetaInfo = ({content = []}) => (
    <div>
        <dl className="dl-horizontal">
            {content.map(record => (
                <div key={record.feature}>
                    <dt>{record.feature}</dt>
                    <dd>{record.description}</dd>
                </div>
            ))}
        </dl>
    </div>
)

export default MetaInfo
