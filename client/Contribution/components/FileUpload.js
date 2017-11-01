'use strict'

import React from 'react'
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

import FormErrorDisplay from './FormErrorDisplay'

const FileUpload = ({value, onChange, showError, errorMessage}) => {
    const shouldDisplayError = showError && errorMessage !== ''

    return (
        <FormGroup controlId="file"
                   validationState={shouldDisplayError ? 'warning' : null}>
            <Col componentClass={ControlLabel} sm={2}>File</Col>
            <Col sm={10}>
                <FormControl type="file"
                             name="file"
                             label="File"
                             accept=".csv, .xlsx, .zip"
                             value={value}
                             onChange={onChange}/>
                <FormErrorDisplay display={shouldDisplayError}>
                    <p>{errorMessage}</p>
                </FormErrorDisplay>
            </Col>
        </FormGroup>
    )
}

export default FileUpload