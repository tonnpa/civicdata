'use strict'

import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

const Mission = () => (
    <Grid id="mission" fluid>
        <Row>
            <Col lg={6} lgOffset={3} md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <h1>
                    Building an archive of <span>open</span> and <span>local</span> environmental data.
                </h1>
            </Col>
        </Row>
    </Grid>
)

export default Mission