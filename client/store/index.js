'use strict'

global.jQuery = require('jquery')
require('bootstrap')

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/civicdata.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-fetch'

import {initializeState} from '../actions/Actions'
import App from '../components/App'
import appReducer from './reducers'

const loggerMiddleware = createLogger()
const store = createStore(appReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

fetch('api/datainfo')
    .then(response => response.json())
    .then(datasets => {
        fetch('api/datafiles')
            .then(response => response.json())
            .then(datafiles => store.dispatch(
                initializeState(datasets, datafiles))
            )
        }
    )

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)