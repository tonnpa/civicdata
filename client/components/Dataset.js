'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FaDownload from 'react-icons/lib/fa/download';

import Snapshot from './Snapshot';
import Tag from './Tag';


class Dataset extends React.Component {
	render() {
		const tags = [];
		tags.push(<Tag key={0} bsStyle={'primary'} text={this.props.date}/>);
		// tags.push(<Tag key={1} bsStyle={'success'} text={this.props.format}/>);
		// tags.push(<Tag key={2} bsStyle={'warning'} text={this.props.size}/>);

		return (
			<Grid fluid={true}>
				<Row>
					<Col md={8}>
                        <h2>{this.props.title}</h2>
                        <hr/>
						<span><b>Collector:</b> {this.props.collector}</span>
						<p>{this.props.description}</p>
						<p>{tags}</p>
                        <a href={`/static/${this.props.file_name}`}
                           download={this.props.file_name}>Download <FaDownload/></a>
                        {/*<Preview hidden={this.props.hidePreview}*/}
								 {/*onClick={this.props.onPreviewClick}/>*/}
					</Col>
					<Col md={4}>
						<Snapshot image={this.props.image}
								  visual_url={this.props.visual_url}
								  visual_org={this.props.visual_org}/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Dataset;
