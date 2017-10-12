'use strict'

import auth0 from 'auth0-js'
import history from '../history'

function setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
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

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult);
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}