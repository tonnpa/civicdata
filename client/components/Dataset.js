'use strict'

import React from 'react'
import {Col, Grid, Row, Tab, Table, Tabs} from 'react-bootstrap'

import DownloadButton from './DownloadButton'
import Snapshot from './Snapshot'
import TagList from './TagList'

const Dataset = (props) => {
    const header = []
    const body = []
    if (props.preview) {
        props.preview.header.forEach((columnName, idx) => header.push(
            <th key={idx}>{columnName}</th>
        ))
        props.preview.body.forEach((row, idx) => body.push(
            <tr key={idx}>
                {row.map((cell, idx) => (<td key={idx}>{cell}</td>))}
            </tr>
        ))
    }
    const table = (
        <Table striped bordered condensed hover responsive>
            <thead>
            <tr>{header}</tr>
            </thead>
            <tbody>{body}</tbody>
        </Table>
    )

    return (
        <div className="dataset-container" id={props.id}>
            <Grid fluid={true}>
                <Row>
                    <Col md={8}>
                        <h2>{props.title}</h2>
                        <Tabs id="dataset-details">
                            <Tab title="Description" eventKey={1}>
                                <div className="dataset-description">
                                    <span><b>Collector:</b> {props.collector}</span>
                                    <p>{props.description}</p>

                                    <TagList {...props}/>
                                    <DownloadButton file_name={props.file_name}/>
                                </div>
                            </Tab>
                            <Tab title="Preview" eventKey={2}
                                 onEnter={() => props.onPreviewLoad(props.id)}>
                                {table}
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={4}>
                        <Snapshot {...props}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Dataset
