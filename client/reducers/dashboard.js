"use strict"

import ActionTypes from "../actions/ActionTypes"

const dashboard = (state = {datasets: [], filterText: ""}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return action.initialState

        case ActionTypes.CHANGE_FILTER_TEXT:
            return Object.assign({}, state, {
                filterText: action.filterText
            })

        // case ActionTypes.REQUEST_RECORDS:
        //     return Object.assign({}, state, {
        //         datasets: state.datasets.map((dataset) => {
        //             if (dataset.id === action.id) {
        //                 return Object.assign({}, dataset, {
        //                     isFetching: true
        //                 })
        //             }
        //             return dataset
        //         })
        //     })
        //
        // case ActionTypes.RECEIVE_RECORDS:
        //     return Object.assign({}, state, {
        //         datasets: state.datasets.map((dataset) => {
        //             if (dataset.id === action.id) {
        //                 return Object.assign({}, dataset, {
        //                     isFetching: false,
        //                     records: action.records,
        //                     lastUpdated: action.receivedAt,
        //                     // nextPageUrl
        //                     // fetchedPageCount
        //                 })
        //             }
        //             return dataset
        //         })
        //     })

        default:
            return state
    }
}

export default dashboard