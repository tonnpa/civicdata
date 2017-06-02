"use strict";

import React from "react";
import {Col, Grid, Row} from "react-bootstrap";
import FaDownload from "react-icons/lib/fa/download";

import Snapshot from "./Snapshot";
import TagList from "./TagList";

class Dataset extends React.Component {
    render() {
        return (
            <div className="dataset-container" id={this.props.id}>
                <Grid fluid={true}>
                    <Row>
                        <Col md={8}>
                            <h2>{this.props.title}</h2>
                            <hr/>
                            <span><b>Collector:</b> {this.props.collector}</span>
                            <p>{this.props.description}</p>
                            <TagList {...this.props}/>
                            <a href={`/static/data/${this.props.file_name}`}
                               download={this.props.file_name}
                               className="btn-sm btn-warning"
                               role="button">Download <FaDownload/></a>
                            {/*<Preview hidden={this.props.hidePreview}*/}
                            {/*onClick={this.props.onPreviewClick}/>*/}
                        </Col>
                        <Col md={4}>
                            <Snapshot {...this.props}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dataset;
