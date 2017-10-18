'use strict'

import React from 'react'
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Table} from 'react-bootstrap'

const Contribute = () => (
    <Grid id="data-contribution" fluid>
        <h1>Contribute a new dataset</h1>
        <Form action="/some-page-to-submit" horizontal>
            <FormGroup controlId="dataset-title">
                <Col componentClass={ControlLabel} sm={2}>Dataset title</Col>
                <Col sm={10}><FormControl type="text" placeholder="What is your data about?"/></Col>
            </FormGroup>

            <FormGroup controlId="dateset-collector">
                <Col componentClass={ControlLabel} sm={2}>Collector</Col>
                <Col sm={10}><FormControl type="text" placeholder="Who collected the data?"/></Col>
            </FormGroup>

            <FormGroup controlId="dataset-year">
                <Col componentClass={ControlLabel} sm={2}>Year</Col>
                <Col sm={2}>
                    <FormControl componentClass="select" defaultValue={new Date().getFullYear()}>
                        {Array(150).fill().map((_, year) =>
                            <option value={year+1900} key={year}>{year+1900}</option>)}
                    </FormControl>
                </Col>
                <Col sm={1}><Checkbox>To</Checkbox></Col>
                <Col sm={2}>
                    <FormControl componentClass="select" defaultValue={new Date().getFullYear()} disabled>
                        {Array(150).fill().map((_, year) =>
                            <option value={year+1900} key={year}>{year+1900}</option>)}
                    </FormControl>
                </Col>
                <Col sm={5}/>
            </FormGroup>

            <FormGroup controlId="dataset-file">
                <Col componentClass={ControlLabel} sm={2}>File</Col>
                <Col sm={10}>
                    {/*<FileUpload />*/}
                    <FormControl type="file" label="File" />
                </Col>
            </FormGroup>

            <FormGroup controlId="dataset-meta">
                <Col componentClass={ControlLabel} sm={2}>Metadata</Col>
                <Col sm={10}>
                    <Table responsive bordered>
                        <thead>
                        <tr>
                            <th>Column name</th>
                            <th>Column description</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody contentEditable={true}>
                        <tr>
                            <td>New Column Name</td>
                            <td>What is the column about?</td>
                            <td>Any additional explanation to understand the data?</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Button>+ Add New Column</Button>
                </Col>
            </FormGroup>
            <Col smOffset={10} sm={2}>
                <Button bsStyle="warning">Submit Dataset</Button>
            </Col>
        </Form>
    </Grid>
)

export default Contribute