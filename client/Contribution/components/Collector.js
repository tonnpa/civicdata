'use strict'

import React from 'react'
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

const Collector = ({value, maxLength, charactersLeft, onChange}) => (
    <FormGroup controlId="collector">
        <Col componentClass={ControlLabel} sm={2}>Collector</Col>
        <Col sm={9}><FormControl type="text"
                                 placeholder="Who collected the data?"
                                 name="collector"
                                 maxLength={maxLength}
                                 value={value}
                                 onChange={onChange}/></Col>
        <Col sm={1}>{(charactersLeft === maxLength) ?
            <span>max. </span> :
            <span></span>} {charactersLeft}</Col>
    </FormGroup>
)

export default Collector