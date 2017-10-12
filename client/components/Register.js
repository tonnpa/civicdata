'use strict'

import React from 'react'
import {Button} from 'react-bootstrap'

const Register = (props) => {
    const style = {color: "white", textAlign: "center"}
    return (
        <div>
            <h1 style={style}>Join the Local Network for Local Data!</h1>
            {(!props.auth.isAuthenticated()) ?
                <div style={{textAlign: "center"}}>
                    <p style={style}>Do I know you?</p>
                    <Button bsStyle="warning" onClick={() => props.auth.login()}>
                        Sign in/Register
                    </Button>
                </div> :
                <div style={{textAlign: "center"}}>
                    <p style={style}>Welcome back! You are logged in!</p> :
                    <Button bsStyle="warning" onClick={() => props.auth.logout()}>
                        Sign out
                    </Button>
                </div>
            }
        </div>
    )
}

export default Register