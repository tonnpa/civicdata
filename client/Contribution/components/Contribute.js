'use strict'

import React from 'react'
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid} from 'react-bootstrap'
import fetch from 'isomorphic-fetch'

import DjangoCSRFToken from '../../auth/DjangoCSRFToken'
import Collector from './Collector'
import Title from './Title'
import Year from './Year'
import {ruleRunner, run} from "../validation/RuleRunner"
import {required} from "../validation/Rules"

const MAX_TITLE_LENGTH = 96
const MAX_COLLECTOR_LENGTH = 64

const fieldValidations = [
    ruleRunner('title', 'Dataset title', required)
]

class Contribute extends React.Component {
    constructor () {
        super()
        this.state = {
            title: '',
            titleCharactersLeft: MAX_TITLE_LENGTH,
            collector: '',
            collectorCharactersLeft: MAX_COLLECTOR_LENGTH,
            yearFrom: new Date().getFullYear(),
            yearRange: false,
            yearTo: 0,

            showErrors: false,
            validationErrors: {},
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCollectorChange = this.handleCollectorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.errorFor = this.errorFor.bind(this)
    }

    componentWillMount() {
        this.setState(Object.assign(this.state, {
            validationErrors: run(this.state, fieldValidations)
        }))
    }

    handleTitleChange(event) {
        const name = event.target.name
        const value = event.target.value
        let newState = Object.assign(this.state, {
            [name]: value,
            titleCharactersLeft: MAX_TITLE_LENGTH - value.length,
        })
        newState.validationErrors = run(newState, fieldValidations)
        this.setState(newState)
    }

    handleCollectorChange(event) {
        const name = event.target.name
        const value = event.target.value
        const newState = Object.assign(this.state, {
            [name]: value,
            collectorCharactersLeft: MAX_COLLECTOR_LENGTH - value.length,
        })
        this.setState(newState)
    }

    handleYearChange(event) {
        const target = event.target
        if (target.type === 'checkbox') {
            this.setState(Object.assign(this.state, {
                yearRange: target.checked
            }))
        } else {
            this.setState(Object.assign(this.state, {
                [target.name]: parseInt(target.value)
            }))
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(Object.assign(this.state, {
            showErrors: true
        }))
        if (Object.keys(this.state.validationErrors).length !== 0) {
            return null
        }

        const form = new FormData(document.getElementById('dataset-form'))
        fetch('/submit', {
            credentials: 'include',
            method: 'post',
            body: form,
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    errorFor(field) {
        return this.state.validationErrors[field] || ""
    }

    render() {
        return (
            <Grid id="data-contribution" fluid>
                <h1>Contribute a new dataset</h1>
                <Form id="dataset-form" onSubmit={this.handleSubmit} horizontal>
                    <DjangoCSRFToken />

                    <Title value={this.state.title}
                           charactersLeft={this.state.titleCharactersLeft}
                           maxLength={MAX_TITLE_LENGTH}
                           onChange={this.handleTitleChange}
                           showError={this.state.showErrors}
                           errorMessage={this.errorFor('title')}/>

                    <Collector value={this.state.collector}
                               charactersLeft={this.state.collectorCharactersLeft}
                               maxLength={MAX_COLLECTOR_LENGTH}
                               onChange={this.handleCollectorChange}/>

                    <Year yearFrom={this.state.yearFrom}
                          yearTo={this.state.yearTo}
                          isRange={this.state.yearRange}
                          onChange={this.handleYearChange}/>

                    <FormGroup controlId="file">
                        <Col componentClass={ControlLabel} sm={2}>File</Col>
                        <Col sm={10}>
                            {/*<FileUpload />*/}
                            <FormControl type="file" name="file" label="File" />
                        </Col>
                    </FormGroup>

                    {/*<Metadata />*/}

                    <Col smOffset={10} sm={2}>
                        <Button bsStyle="warning" type="submit">Submit Dataset</Button>
                    </Col>
                </Form>
            </Grid>
        )
    }
}

export default Contribute