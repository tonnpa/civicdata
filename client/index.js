'use strict'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/civicdata.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-fetch'
import jQuery from 'jquery'

import {initializeState} from './actions/Actions'
import Home from './Home/components/Home'
import Auth from './auth/Auth'
import Callback from './Registration/components/Callback'
import Register from './Registration/components/Register'
import history from './history'
import appReducer from './reducers'

const auth = new Auth()
const DEBUG = (process.env.DEBUG === 'true')
const loggerMiddleware = createLogger({predicate: (getState, action) => DEBUG})
const store = createStore(appReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

window.$ = window.jQuery = jQuery
if (DEBUG) {
    window.store = store
}

fetch('/api/datainfo')
    .then(response => response.json())
    .then(datasets => {
            fetch('/api/datafiles')
                .then(response => response.json())
                .then(datafiles => store.dispatch(
                    initializeState(datasets, datafiles))
                )
        }
    )

function handleAuthentication(nextProps) {
    if (/access_token|id_token|error/.test(nextProps.location.hash)) {
        auth.handleAuthentication()
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" render={props => <Home auth={auth} {...props} />}/>
                <Route path="/register" render={props => <Register auth={auth} {...props}/>}/>
                <Route path="/callback" render={props => {
                    handleAuthentication(props)
                    return <Callback auth={auth} {...props}/>
                }
                    }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)