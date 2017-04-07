'use strict';

import React from 'react';
import {Grid, Row, Col, Button, Image, Label, Table} from 'react-bootstrap';

const treeCanopy = require('../images/treesatlanta.png');
const treeSpecies = require('../images/treespecies.png');
const chattahoochee = require('../images/chattahoochee.png');

const placeholder = (
	<Table striped bordered condensed hover>
	  <thead>
	    <tr>
	      <th>#</th>
	      <th>First Name</th>
	      <th>Last Name</th>
	      <th>Username</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>1</td>
	      <td>Mark</td>
	      <td>Otto</td>
	      <td>@mdo</td>
	    </tr>
	    <tr>
	      <td>2</td>
	      <td>Jacob</td>
	      <td>Thornton</td>
	      <td>@fat</td>
	    </tr>
	    <tr>
	      <td>3</td>
	      <td colSpan="2">Larry the Bird</td>
	      <td>@twitter</td>
	    </tr>
	  </tbody>
	</Table>
);

function Snapshot(props) {
	return (
		<a href={props.visual_url}>
			<Image src={props.image} responsive/>
			<div className={"image-caption"}> {props.visual_org}</div>
		</a>
	);
}

function Tag(props) {
	return (
		<span>
			<Label bsStyle={props.bsStyle}>{props.text}</Label>
		   	&emsp;
		</span>
	);
}


class Dataset extends React.Component {
	render() {
		let tags = [];
		tags.push(<Tag bsStyle={'primary'} text={this.props.date}/>);
		tags.push(<Tag bsStyle={'success'} text={this.props.format}/>);
		tags.push(<Tag bsStyle={'warning'} text={this.props.size}/>);

		return (
			<Grid fluid={true}>
				<Row>
					<h2>{this.props.name}</h2>
					<Col md={8}>
						<span><b>Source:</b> {this.props.source}</span>
						<p>"{this.props.description}"</p>
						<p>{tags}</p>

						<Button bsStyle={"info"}>Preview</Button>
						{placeholder}
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

const DATASETS = [
	{
		name: 'Urban Tree Canopy',
		source: 'Urban Tree Canopy Study',
		description: 'The City of Atlanta contracted researchers at the Center for Geographic Information Systems (CGIS) and the Center for Quality Growth and Regional Development (CQGRD) at Georgia Tech to quantify the existing Urban Tree Canopy in the City. Urban Tree Canopy (UTC) is defined as the layer of leaves, branches and stems of trees that cover the ground when viewed from above.',
		image: treeCanopy,
		visual_url: 'http://geospatial.gatech.edu/TreesAtlanta/',
		visual_org: 'Center for GIS at Georgia Tech',
		date: '2008', 
		format: 'img.vat.dbf', 
		size: '49.9MB',
	},
	{
		name: 'Street Trees by Species',
		source: 'Trees Atlanta',
		description: "Atlanta's urban forest provides numerous environmental and social benefits. This map shows the distribution and biodiversity of the city's street trees based on data from Trees Atlanta.",
		image: treeSpecies,
		visual_url: 'http://dssgtrees.gatech.edu/ATLStreetTrees/index.html',
		visual_org: 'DSSG Atlanta 2015',
		date: '1994-2014', 
		format: 'csv', 
		size: '1.7MB',
	},
	{
		name: 'Water Quality in Urban Streams',
		source: 'Chattahoochee Riverkeeper Neighborhood Water Watch',
		description: "Concerned citizens from all reaches of north Georgia bring water samples from their respective stations to CRK’s laboratories, as part of NWW. Water samples are promptly analyzed for turbidity, conductivity, optical brighteners, and E.coli.",
		image: chattahoochee,
		visual_url: 'https://chattahoochee.org/nww/',
		visual_org: 'Chattahoochee Riverkeeper',
		date: '1994-present', 
		format: 'csv', 
		size: 'remote'
	},
];

export default class App extends React.Component {
  render() {
  	let entries = [];

  	DATASETS.forEach(function(dataset) {
  		entries.push(<Dataset key={dataset.name} {...dataset}/>
	  	);
  	});

    return (
      <div>
        <h1>Atlanta Environmental Datasets</h1>
        {entries}
      </div>
      );
  }
}