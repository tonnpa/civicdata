/**
 * Created by tonnpa on 6/23/17.
 */
'use strict'

import React from 'react'

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
