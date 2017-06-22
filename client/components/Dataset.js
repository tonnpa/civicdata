'use strict'

import React from 'react'
import {Col, Grid, Row, Tab, Tabs} from 'react-bootstrap'

import DatasetDetails from './DatasetDetails'
import Preview from './Preview'
import Snapshot from './Snapshot'
import {FileFormats, TabTitles} from '../constants'

const Dataset = (props) => {
    const hasPreviewFormat = files => {
        let hasPreview = false
        files.forEach(file => {
            if (file.format === FileFormats.CSV ||
                file.format === FileFormats.EXCEL) {
                hasPreview = true
            }
        })
        return hasPreview
    }

    return (
        <div className="dataset-container" id={props.id}>
            <Grid fluid={true}>
                <Row>
                    <Col md={(props.tab === TabTitles.PREVIEW) ? 12 : 8}>
                        <h2>{props.title}</h2>
                        <Tabs id="dataset-details" onSelect={(tab) => props.onSelectTab(props.id, tab)}>
                            <Tab title="Description" eventKey={1}>
                                <DatasetDetails {...props}/>
                            </Tab>
                            <Tab title="Preview" eventKey={2}
                                 onEnter={() => props.onPreviewLoad(props.id)}
                                 disabled={!hasPreviewFormat(props.files)}>
                                <Preview previewContent={props.previewContent}/>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={4}>
                        <Snapshot image_file_name={props.image_file_name}
                                  tab={props.tab}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Dataset
