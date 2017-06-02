"use strict";

import ActionTypes from "../actions/ActionTypes";

function dashboard(state = {datasets: []}, action) {
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

        case ActionTypes.INITIALIZE_STATE:
            return action.initialState;

        case ActionTypes.REQUEST_RECORDS:
            return Object.assign({}, state, {
				datasets: state.datasets.map((dataset) => {
					if (dataset.id === action.id) {
						return Object.assign({}, dataset, {
							isFetching: true
						});
					}
					return dataset;
				})
			});

        case ActionTypes.RECEIVE_RECORDS:
            return Object.assign({}, state, {
				datasets: state.datasets.map((dataset) => {
					if (dataset.id === action.id) {
						return Object.assign({}, dataset, {
							isFetching: false,
                            records: action.records,
                            lastUpdated: action.receivedAt,
                            // nextPageUrl
                            // fetchedPageCount
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