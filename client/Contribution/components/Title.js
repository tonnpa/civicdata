'use strict'

import React from 'react'
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

const Title = ({value, maxLength, charactersLeft, onChange}) => (
    <FormGroup controlId="title">
        <Col componentClass={ControlLabel} sm={2}>Dataset title</Col>
        <Col sm={9}><FormControl type="text"
                                 placeholder="What is your data about?"
                                 name="title"
                                 maxLength={maxLength}
                                 value={value}
                                 onChange={onChange}/></Col>
        <Col sm={1}>{(charactersLeft === maxLength) ?
            <span>max. </span> :
            <span></span>} {charactersLeft}</Col>
    </FormGroup>
)

export default Title