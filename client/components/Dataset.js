"use strict";

import React from "react";
import {Col, Grid, Row} from "react-bootstrap";

import DownloadButton from "./DownloadButton";
import Snapshot from "./Snapshot";
import TagList from "./TagList";

const Dataset = (props) => (
    <div className="dataset-container" id={props.id}>
        <Grid fluid={true}>
            <Row>
                <Col md={8}>
                    <h2>{props.title}</h2>
                    <hr/>

                    <span><b>Collector:</b> {props.collector}</span>
                    <p>{props.description}</p>

                    <TagList {...props}/>
                    <DownloadButton file_name={props.file_name}/>
                </Col>
                <Col md={4}>
                    <Snapshot {...props}/>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Dataset;
