'use strict';

import React from "react";
import {Col, Grid, Row} from "react-bootstrap";
import FaDownload from "react-icons/lib/fa/download";

import Snapshot from "./Snapshot";
import Tag from "./Tag";


class Dataset extends React.Component {
    TagList() {
        return (
            <ul className="list-inline">
                <li><Tag key={0} bsStyle={'primary'} text="date"/></li>
                <li><Tag key={1} bsStyle={'success'} text="format"/></li>
                <li><Tag key={2} bsStyle={'warning'} text="size"/></li>
            </ul>
        );
    }

    render() {
        return (
            <div className="dataset-container">
                <Grid fluid={true}>
                    <Row>
                        <Col md={8}>
                            <h2>{this.props.title}</h2>
                            <hr/>
                            <span><b>Collector:</b> {this.props.collector}</span>
                            <p>{this.props.description}</p>
                            {this.TagList()}
                            <a href={`/static/data/${this.props.file_name}`}
                               download={this.props.file_name}>Download <FaDownload/></a>
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
