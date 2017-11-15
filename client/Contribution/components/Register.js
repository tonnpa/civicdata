'use strict'

import React from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

import Footer from '../../Home/components/Footer'
import Mission from '../../Home/components/Mission'

const Register = (props) => (
    <div>
        {(props.auth.isAuthenticated()) ?
            <Redirect to="/contribute"/> :
            <div>
                <Mission />
                <div id="registration">
                    <h1>Join the Local Network for Local Data!</h1>
                    <Button bsStyle="warning" onClick={() => props.auth.login()}>
                        Sign in/Register
                    </Button>
                </div>
                <Footer />
            </div>
        }
    </div>
)

export default Register