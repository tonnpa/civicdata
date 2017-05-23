'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dashboard from './reducers/dashboard';
import fetch from 'isomorphic-fetch';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {initializeState, fetchRecords} from './actions/Actions';

import './index.css';

require('./images/favicon.ico');

let loggerMiddleware = createLogger();
const store = createStore(dashboard,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

fetch('api/datainfo')
    .then(response => response.json())
    .then(data => store.dispatch(initializeState(data.results)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);