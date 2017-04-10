'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

const Snapshot = ({image, visual_url, visual_org}) => (
	<a href={visual_url}>
		<Image src={image} responsive/>
		<div className={"image-caption"}> {visual_org}</div>
	</a>
);

export default Snapshot;