'use strict';

import React from 'react';
import {Label} from 'react-bootstrap';


const Tag = ({text, bsStyle}) => (
	<span>
		<Label bsStyle={bsStyle}>{text}</Label>
	   	&emsp;
	</span>
);

export default Tag;