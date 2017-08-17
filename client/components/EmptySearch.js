'use strict'

import React from 'react'
import {Image} from 'react-bootstrap'

const EmptySearch = () => (
    <div id="empty-search">
        <h2>No datasets to show. &nbsp;
            <Image src="/static/icons/characters/png/depressed.png"/></h2>
        <p className="attribution">
            Icon made by <a href="https://www.swifticons.com/" target="_blank">
            Swifticons </a>from <a href="https://www.flaticon.com/" target="_blank">
            www.flaticon.com</a>.
        </p>
    </div>
)

export default EmptySearch