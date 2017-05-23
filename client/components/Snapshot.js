'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

const Snapshot = ({image_name}) => (
    <Image src={`/static/media/placeholder.jpg`} responsive/>
);

export default Snapshot;