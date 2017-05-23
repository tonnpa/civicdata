'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

const Snapshot = ({image_file_name}) => (
    <Image src={`/static/media/${image_file_name}`} responsive/>
);

export default Snapshot;