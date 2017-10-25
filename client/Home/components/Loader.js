'use strict'

import React from 'react'
import {Image} from 'react-bootstrap'
import FlaticonAttribution from './FlaticonAttribution'

const Loader = () => (
    <div className="loader">
        <Image src="/public/icons/characters/png/attention.png"
               className="loader-image" responsive/>
        <div className="spinner"></div>
        <FlaticonAttribution />
    </div>
)

export default Loader