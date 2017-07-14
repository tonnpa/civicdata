/**
 * Created by tonnpa on 6/23/17.
 */
'use strict'

import React from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

const Feature = ({record}) => {
    if (record.comment) {
        const tooltip = (
            <Tooltip id={record.feature}>{record.comment}</Tooltip>
        )
        return (
            <OverlayTrigger placement="bottom" overlay={tooltip}>
                <dt className="feature-comment">{record.feature} <span className="fa fa-question-circle-o"
                                                                       aria-hidden="true"></span>
                </dt>
            </OverlayTrigger>
        )
    }
    return (<dt>{record.feature}</dt>)
}

const MetaInfo = ({content = []}) => (
    <div>
        <dl className="dl-horizontal">
            {content.map(record => (
                <div key={record.feature} className="feature-info">

                    <Feature record={record}/>
                    <dd>{record.description}</dd>
                </div>
            ))}
        </dl>
    </div>
)

export default MetaInfo
