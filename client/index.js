'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dashboard from './reducers/dashboard';
import DATASETS from './initialState';
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