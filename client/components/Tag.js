"use strict"

import React from "react"
import {Label} from "react-bootstrap"


export const Tag = ({text, tagStyle}) => (
	<span>
		<Label className={`tag ${tagStyle}`}>{text}</Label>
	</span>
)

export const TagStyles = {
    DATE: 'tag-date',
    FORMAT: 'tag-format',
}