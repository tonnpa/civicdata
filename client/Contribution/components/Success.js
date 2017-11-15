'use strict'

import React from 'react'
import {Button} from 'react-bootstrap'
import FaHome from 'react-icons/lib/fa/home'

import Footer from '../../Home/components/Footer'
import Mission from '../../Home/components/Mission'

const Success = (props) => (
    <div>
        <Mission />
        <div id="success">
            <h1>Thank you for your Data Contribution!</h1>
            <Button bsStyle="primary" href="/">
                <FaHome size={18}/> Dashboard
            </Button>
            <Button bsStyle="warning" onClick={() => props.auth.logout()}>
                Sign out
            </Button>
        </div>
        <Footer />
    </div>
)

export default Success