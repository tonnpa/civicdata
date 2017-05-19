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

import {initializeState, fetchRecords} from './actions/Actions';

import './index.css';

require('./images/favicon.ico');

let loggerMiddleware = createLogger();
const store = createStore(dashboard,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);
store.dispatch(initializeState(DATASETS));

// store.dispatch(fetchRecords('atltrees')).then(
//     () => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);