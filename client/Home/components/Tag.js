'use strict'

import React from 'react'
import {Label} from 'react-bootstrap'


const Tag = ({text, tagStyle}) => (
    <span>
		<Label className={`tag ${tagStyle}`}>{text}</Label>
	</span>
)

export default Tag