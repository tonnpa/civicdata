'use strict';

import React from 'react';
import {Button, Table} from 'react-bootstrap';

const visibility = {
	display: 'none',
};

const Preview = ({onClick, hidden}) => (
	<div>
		<Button bsStyle={"info"} onClick={onClick}>Preview</Button>
		<Table striped bordered condensed hover 
			   style={{ display: hidden ? 'none' : null }}>
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Username</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>1</td>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		    </tr>
		    <tr>
		      <td>2</td>
		      <td>Jacob</td>
		      <td>Thornton</td>
		      <td>@fat</td>
		    </tr>
		    <tr>
		      <td>3</td>
		      <td colSpan="2">Larry the Bird</td>
		      <td>@twitter</td>
		    </tr>
		  </tbody>
		</Table>
	</div>
);

export default Preview;