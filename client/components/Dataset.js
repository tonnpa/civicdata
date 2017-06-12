'use strict'

import React from 'react'
import {Col, Grid, Row, Tab, Tabs} from 'react-bootstrap'

import DatasetDetails from './DatasetDetails'
import Preview from './Preview'
import Snapshot from './Snapshot'
import {FileFormats} from '../constants'

const Dataset = (props) => (
    <div className="dataset-container" id={props.id}>
        <Grid fluid={true}>
            <Row>
                <Col md={8}>
                    <h2>{props.title}</h2>
                    <Tabs id="dataset-details">
                        <Tab title="Description" eventKey={1}>
                            <DatasetDetails {...props}/>
                        </Tab>
                        <Tab title="Preview" eventKey={2}
                             onEnter={() => props.onPreviewLoad(props.id)}
                             disabled={props.format === FileFormats.SHAPEFILE}>
                            <Preview previewContent={props.previewContent}/>
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <Snapshot image_file_name={props.image_file_name}/>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Dataset
