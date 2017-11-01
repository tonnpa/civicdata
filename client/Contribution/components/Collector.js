'use strict'

import React from 'react'
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

import FormErrorDisplay from './FormErrorDisplay'

const Collector = ({value, maxLength, charactersLeft, onChange, showError, errorMessage}) => {
    const shouldDisplayError = showError && errorMessage !== ''

    return (
        <FormGroup controlId="collector"
                   validationState={shouldDisplayError ? "warning" : null}>
            <Col componentClass={ControlLabel} sm={2}>Collector</Col>
            <Col sm={9}>
                <FormControl type="text"
                             placeholder="Who collected the data?"
                             name="collector"
                             maxLength={maxLength}
                             value={value}
                             onChange={onChange}/>
                <FormErrorDisplay display={shouldDisplayError}>
                    <p>{errorMessage}</p>
                </FormErrorDisplay>
            </Col>
            <Col sm={1}>{(charactersLeft === maxLength) ?
                <span>max. </span> :
                <span></span>} {charactersLeft}</Col>
        </FormGroup>
    )
}

export default Collector