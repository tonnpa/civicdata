"use strict";

const ActionTypes = {
    // synchronous
	TOGGLE_PREVIEW: 'TOGGLE_PREVIEW',
    INITIALIZE_STATE: 'INITIALIZE_STATE',
    CHANGE_FILTER_TEXT: 'CHANGE_FILTER_TEXT',

    // asynchronous
	REQUEST_RECORDS: 'REQUEST_RECORDS',
    RECEIVE_RECORDS: 'RECEIVE_RECORDS',
};

export default ActionTypes;