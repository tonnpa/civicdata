'use strict';

import ActionTypes from '../actions/ActionTypes';

function dashboard(state = [], action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_PREVIEW:
			return Object.assign({}, state, {
				datasets: state.datasets.map((dataset) => {
					if (dataset.id === action.id) {
						return Object.assign({}, dataset, {
							hidePreview: !dataset.hidePreview
						});
					}
					return dataset;
				})
			});

		default:
			return state;
	}
}

export default dashboard;