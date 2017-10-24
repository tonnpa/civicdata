'use strict'

import React from 'react'
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid} from 'react-bootstrap'
import fetch from 'isomorphic-fetch'

import DjangoCSRFToken from '../../auth/DjangoCSRFToken'
import Collector from './Collector'
import Metadata from './Metadata'
import Title from './Title'
import Year from './Year'

const MAX_TITLE_LENGTH = 96
const MAX_COLLECTOR_LENGTH = 64

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
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCollectorChange = this.handleCollectorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value,
            titleCharactersLeft: MAX_TITLE_LENGTH - value.length,
        })
    }

    handleCollectorChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value,
            collectorCharactersLeft: MAX_COLLECTOR_LENGTH - value.length,
        })
    }

    handleYearChange(event) {
        const target = event.target
        if (target.type === 'checkbox') {
            this.setState({
                yearRange: target.checked
            })
        } else {
            this.setState({
                [target.name]: parseInt(target.value)
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(document.getElementById('dataset-form'))
        fetch('/submit', {
            credentials: 'include',
            method: 'post',
            body: form,
        })
            .then(response => response.json())
            .then(data => console.log(data))
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
                           onChange={this.handleTitleChange}/>

                    <Collector value={this.state.collector}
                               charactersLeft={this.state.collectorCharactersLeft}
                               maxLength={MAX_COLLECTOR_LENGTH}
                               onChange={this.handleCollectorChange}/>

                    <Year yearFrom={this.state.yearFrom}
                          yearTo={this.state.yearTo}
                          isRange={this.state.yearRange}
                          onChange={this.handleYearChange}/>

                    {/*<FormGroup controlId="dataset-file">*/}
                        {/*<Col componentClass={ControlLabel} sm={2}>File</Col>*/}
                        {/*<Col sm={10}>*/}
                            {/*/!*<FileUpload />*!/*/}
                            {/*<FormControl type="file" label="File" />*/}
                        {/*</Col>*/}
                    {/*</FormGroup>*/}

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