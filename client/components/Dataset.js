'use strict'

import React from 'react'
import {Col, Grid, Row, Tab, Table, Tabs} from 'react-bootstrap'

import DownloadButton from './DownloadButton'
import Snapshot from './Snapshot'
import TagList from './TagList'

const table = (
    <Table striped bordered condensed hover responsive>
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>
)

const Dataset = (props) => (
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
                             onEnter={() => console.log("Entering Preview")}>
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

export default Dataset
