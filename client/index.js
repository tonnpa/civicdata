'use strict';

global.jQuery = require('jquery');
require('bootstrap');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import dashboard from "./reducers/dashboard";
import fetch from "isomorphic-fetch";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";

import {initializeState} from "./actions/Actions";

import "./index.css";

let loggerMiddleware = createLogger();
const store = createStore(dashboard,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

fetch('api/datainfo')
    .then(response => response.json())
    .then(data => store.dispatch(initializeState(data.results)));

window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);