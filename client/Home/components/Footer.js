/**
 * Created by tonnpa on 7/10/17.
 */
'use strict'

import React from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'

const Footer = () => (
    <footer>
        <Grid fluid>
            <Row>
                <Col md={2} mdOffset={1}>
                    <h4>Georgia Tech Resources</h4>
                    <ul>
                        <li><a href="http://www.gatech.edu/offices-and-departments">Offices &amp; Departments</a></li>
                        <li><a href="http://www.news.gatech.edu">News Center</a></li>
                        <li><a href="http://www.gatech.edu/calendar">Campus Calendar</a></li>
                        <li><a href="http://www.specialevents.gatech.edu">Special Events</a></li>
                        <li><a href="http://www.greenbuzz.gatech.edu">GreenBuzz</a></li>
                    </ul>
                </Col>
                <Col md={2} mdOffset={1}>
                    <h4>Visitor Resources</h4>
                    <ul>
                        <li><a href="http://www.admission.gatech.edu/visit/directions-and-parking">Directions to Campus</a></li>
                        <li><a href="http://www.pts.gatech.edu/visitors/Pages/default.aspx">Visitor Parking Information</a></li>
                        <li><a href="http://www.lawn.gatech.edu/help/GTvisitor.html">GTvisitor Wireless Network Information</a></li>
                        <li><a href="https://pe.gatech.edu/global-learning-center">Georgia Tech Global Learning Center</a></li>
                        <li><a href="http://www.gatechhotel.com">Georgia Tech Hotel &amp; Conference Center</a></li>
                        <li><a href="http://www.gatech.bncollege.com">Barnes &amp; Noble at Georgia Tech</a></li>
                        <li><a href="http://www.ferstcenter.gatech.edu">Ferst Center for the Arts</a></li>
                        <li><a href="http://www.ipst.gatech.edu/amp">Robert C. Williams Paper Museum</a></li>
                    </ul>
                </Col>
                <Col md={4} mdOffset={2} sm={6} smOffset={4} xs={6} xsOffset={3}>
                    <a href="http://maps.gatech.edu/">
                        <Image id="gt-map" src={`/static/gt-map.jpg`}
                               alt="Map of Georgia Tech"
                               responsive/>
                    </a>
                    <p> Georgia Institute of Technology<br/>
                        North Avenue, Atlanta, GA 30332<br/>
                        Phone: 404-894-2000
                    </p>
                </Col>
            </Row>
            <Row id="footer-closing">
                <Image id="gt-logo" src={`/static/gt-logo-footer.png`}
                       className="center-block" alt="Georgia Tech"
                       responsive/>
                <p>© Georgia Institute of Technology</p>
            </Row>
        </Grid>
    </footer>
)

export default Footer