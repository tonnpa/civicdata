'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Preview from './Preview';
import Snapshot from './Snapshot';
import Tag from './Tag';

class Dataset extends React.Component {
	render() {
		let tags = [];
		tags.push(<Tag key={0} bsStyle={'primary'} text={this.props.date}/>);
		tags.push(<Tag key={1} bsStyle={'success'} text={this.props.format}/>);
		tags.push(<Tag key={2} bsStyle={'warning'} text={this.props.size}/>);

		return (
			<Grid fluid={true}>
				<Row>
					<h2>{this.props.name}</h2>
					<Col md={8}>
						<span><b>Source:</b> {this.props.source}</span>
						<p>"{this.props.description}"</p>
						<p>{tags}</p>
						<Preview hidden={this.props.hidePreview}
								 onClick={this.props.onPreviewClick}/>
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
