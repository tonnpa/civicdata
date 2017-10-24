'use strict'

import React from 'react'
import {Checkbox, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

const Year = ({yearFrom, yearTo, isRange, onChange}) => (
    <FormGroup controlId="year">
        <Col componentClass={ControlLabel} sm={2}>Year</Col>
        <Col sm={2}>
            <FormControl componentClass="select"
                         name="yearFrom"
                         value={yearFrom}
                         onChange={onChange}>
                {Array(150).fill().map((_, year) =>
                    <option value={year+1900} key={year}>{year+1900}</option>)}
            </FormControl>
        </Col>
        <Col sm={1}><Checkbox checked={isRange} onChange={onChange}>To</Checkbox></Col>
        <Col sm={2}>
            <FormControl componentClass="select"
                         name="yearTo"
                         value={yearTo}
                         onChange={onChange}
                         disabled={!isRange}>
                <option value={0} key={0}></option>
                {Array(50).fill().map((_, year) =>
                    <option value={year+yearFrom} key={year}>{year+yearFrom}</option>)}
            </FormControl>
        </Col>
        <Col sm={5}/>
    </FormGroup>
)

export default Year