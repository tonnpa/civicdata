'use strict';

import React from 'react';
import VisibleDataset from '../containers/VisibleDataset';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Atlanta Environmental Datasets</h1>
				<VisibleDataset />
			</div>
		);
	}
}

export default App;