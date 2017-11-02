'use strict'

import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import history from '../history'

function setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    Cookies.set('expires_at', expiresAt)
    Cookies.set('access_token', authResult.accessToken)
    Cookies.set('id_token', authResult.idToken)
    // navigate to the home route
    history.replace('/')
}

function clearSession() {
    Cookies.remove('access_token')
    Cookies.remove('id_token')
    Cookies.remove('expires_at')
}

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'civicdata.auth0.com',
            clientID: 'oHYmwgzB4A1VqXq3TfUONr4CJU8HTlho',
            redirectUri: 'http://localhost:8000/callback',
            audience: 'https://civicdata.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid',
        })

        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
    }

    login() {
        this.auth0.authorize()
    }

    logout() {
        // Clear access token and ID token from local storage
        clearSession()
        // navigate to the home route
        history.replace('/')
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult)
                // navigate to contribution after successful authentication
                history.replace('/contribute')
            } else if (err) {
                history.replace('/')
                console.log(err)
            }
        })
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = Cookies.get('expires_at') || null
        return new Date().getTime() < JSON.parse(expiresAt)
    }
}