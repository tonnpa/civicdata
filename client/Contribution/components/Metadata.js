'use strict'

import React from 'react'
import {Button, Col, ControlLabel, FormGroup, Table} from 'react-bootstrap'

const emptyRow = [
    'New column name',
    'What is the column about?',
    'Any additional explanation to understand the column?'
]

class Metadata extends React.Component {
    constructor() {
        super()
        this.state = {
            records: [
                emptyRow,
            ]
        }
    }

    render() {
        return (
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
                        <tbody>
                        {this.state.records.map((record, idx) =>
                            <tr key={idx}>
                                {record.map((cell, i) => <td key={i}><input type="text" placeholder={cell}/></td>)}
                            </tr>)}
                        </tbody>
                    </Table>
                    <Button onClick={() => {
                        this.setState({
                            records: [...this.state.records, emptyRow]
                        })
                    }}>+ Add New Column</Button>
                    {' '}
                    <Button onClick={() => {
                        this.setState({
                            records: this.state.records.slice(0, -1)
                        })
                    }}>- Remove Last Column</Button>
                </Col>
            </FormGroup>
        )
    }
}

export default Metadata