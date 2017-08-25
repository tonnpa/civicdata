'use strict'

import React from 'react'
import {Col, Grid, Row, Tab, Tabs} from 'react-bootstrap'
import {Element} from 'react-scroll'

import DatasetDetails from './DatasetDetails'
import MetaInfo from './MetaInfo'
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
        <div className="dataset-container">
            <Element name={props.id} className="anchor"></Element>
            <Grid fluid>
                <Row>
                    <Col md={(props.tab === TabTitles.PREVIEW) ? 12 : 8}>
                        <h2>{props.title}</h2>
                        <Tabs id="dataset-details" onSelect={(tab) => props.onSelectTab(props.id, tab)}>
                            <Tab title="Description" eventKey={TabTitles.DESCRIPTION}>
                                <DatasetDetails {...props}/>
                            </Tab>
                            <Tab title="Meta Information" eventKey={TabTitles.METADATA}
                                 onEnter={() => props.onMetaLoad(props.id)}
                                 disabled={!hasPreviewFormat(props.files)}>
                                <MetaInfo content={props.metainfo}/>
                            </Tab>
                            <Tab title="Preview" eventKey={TabTitles.PREVIEW}
                                 onEnter={() => props.onPreviewLoad(props.id)}
                                 disabled={!hasPreviewFormat(props.files)}>
                                <Preview isFetchingRecords={props.isFetchingRecords}
                                         previewContent={props.previewContent}/>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={4}>
                        <Snapshot image_file_name={props.image_file_name}
                                  title={props.title}
                                  caption={props.caption}
                                  tab={props.tab}
                                  isOpen={props.isImageOpen}
                                  onToggle={() => props.onImageToggle(props.id)}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Dataset
