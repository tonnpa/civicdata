"use strict";

import ActionTypes from "./ActionTypes";

export const changeFilterText = (filterText) => ({
    type: ActionTypes.CHANGE_FILTER_TEXT,
    filterText
});

export const initializeState = (datasets) => ({
    type: ActionTypes.INITIALIZE_STATE,
    initialState: {
        datasets: datasets,
        filterText: "",
    }
});

// // When it's time to fetch the records for some dataset,
// // we will dispatch a REQUEST_RECORDS action
// export function requestRecords(id) {
//     return {
//         type: ActionTypes.REQUEST_RECORDS,
//         id
//     }
// }
//
// // When the network request comes through,
// // we will dispatch RECEIVE_RECORDS
// export function receiveRecords(id, json) {
//     console.log(json);
//     return {
//         type: ActionTypes.RECEIVE_RECORDS,
//         id,
//         records: [1, 2, 3],
//         receivedAt: Date.now()
//     }
// }
//
// export function fetchRecords(id) {
//     return function (dispatch) {
//         dispatch(requestRecords(id));
//         return fetch(`/api/${id}`)
//             .then(response => response.json())
//             .then(json => dispatch(receiveRecords(id, json)));
//     }
// }