'use strict'

import React from 'react'
import {Image} from 'react-bootstrap'
import FlaticonAttribution from './FlaticonAttribution'

const EmptySearch = () => (
    <div id="empty-search">
        <h2>No datasets to show. &nbsp;
            <Image src="/public/icons/characters/png/depressed.png"/></h2>
        <FlaticonAttribution />
    </div>
)

export default EmptySearch