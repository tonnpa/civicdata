'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dashboard from './reducers/dashboard';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {fetchRecords} from './actions/Actions';

import './index.css';

require('./images/favicon.ico');
const treeCanopy = require('./images/treesatlanta.png');
const treeSpecies = require('./images/treespecies.png');
const chattahoochee = require('./images/chattahoochee.png');

const DATASETS = [
	{
		id: 'treecanopy',
		name: 'Urban Tree Canopy',
		source: 'Urban Tree Canopy Study',
		description: 'The City of Atlanta contracted researchers at the Center for Geographic Information Systems (CGIS) and the Center for Quality Growth and Regional Development (CQGRD) at Georgia Tech to quantify the existing Urban Tree Canopy in the City. Urban Tree Canopy (UTC) is defined as the layer of leaves, branches and stems of trees that cover the ground when viewed from above.',
		image: treeCanopy,
		visual_url: 'http://geospatial.gatech.edu/TreesAtlanta/',
		visual_org: 'Center for GIS at Georgia Tech',
		date: '2008', 
		format: 'img.vat.dbf', 
		size: '49.9MB',
		hidePreview: true,
        isFetching: false,
        records: [],
        lastUpdated: Date.now(),
	},
	{
		id: 'atltrees',
		name: 'Street Trees by Species',
		source: 'Trees Atlanta',
		description: "Atlanta's urban forest provides numerous environmental and social benefits. This map shows the distribution and biodiversity of the city's street trees based on data from Trees Atlanta.",
		image: treeSpecies,
		visual_url: 'http://dssgtrees.gatech.edu/ATLStreetTrees/index.html',
		visual_org: 'DSSG Atlanta 2015',
		date: '1994-2014',
		format: 'csv',
		size: '1.7MB',
		hidePreview: true,
        isFetching: false,
        records: [],
        lastUpdated: Date.now(),
	},
	{
		id: 2,
		name: 'Water Quality in Urban Streams',
		source: 'Chattahoochee Riverkeeper Neighborhood Water Watch',
		description: "Concerned citizens from all reaches of north Georgia bring water samples from their respective stations to CRK’s laboratories, as part of NWW. Water samples are promptly analyzed for turbidity, conductivity, optical brighteners, and E.coli.",
		image: chattahoochee,
		visual_url: 'https://chattahoochee.org/nww/',
		visual_org: 'Chattahoochee Riverkeeper',
		date: '1994-present',
		format: 'csv',
		size: 'remote',
		hidePreview: true,
        isFetching: false,
        records: [],
        lastUpdated: Date.now(),
	},
];

let loggerMiddleware = createLogger();
const store = createStore(dashboard,
    {datasets: DATASETS},
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(fetchRecords('atltrees')).then(
    () => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);