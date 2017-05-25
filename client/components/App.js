'use strict';

import React from 'react';
import VisibleDataset from '../containers/VisibleDataset';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="img-header text-hide">Civic Data</h1>
				<VisibleDataset />
			</div>
		);
	}
}

export default App;