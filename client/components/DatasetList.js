'use strict';

import React from 'react';
import Dataset from './Dataset';

const DatasetList = ({datasets, onPreviewClick}) => (
	<div>
		{datasets.map(dataset => 
			<Dataset
				key={dataset.id}
				{...dataset}
				onPreviewClick={() => onPreviewClick(dataset.id)}	
			/>
		)}
	</div>
);

export default DatasetList;