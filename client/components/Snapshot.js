'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

const placeholder = require('../images/placeholder.jpg');

// const Snapshot = ({image, visual_url, visual_org}) => (
// 	<a href={visual_url}>
// 		<Image src={placeholder} responsive/>
// 		<div className={"image-caption"}> {visual_org}</div>
// 	</a>
// );

const Snapshot = ({image, visual_url, visual_org}) => (
    <Image src={placeholder} responsive/>
);

export default Snapshot;