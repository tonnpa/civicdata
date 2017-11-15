'use strict'

import React from 'react'
import {Redirect} from 'react-router-dom'

import DataForm from './DataForm'
import Footer from '../../Home/components/Footer'
import Mission from '../../Home/components/Mission'

const Contribute = (props) => (
    <div>
        {(!props.auth.isAuthenticated()) ?
            <Redirect to="/register"/> :
            <div>
                <Mission />
                <DataForm auth={props.auth}/>
                <Footer />
            </div>
        }
    </div>

)

export default Contribute