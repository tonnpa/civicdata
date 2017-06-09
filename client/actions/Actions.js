'use strict'

import ActionTypes from "./ActionTypes";
import fetch from "isomorphic-fetch";

export const changeFilterText = (filterText) => ({
    type: ActionTypes.CHANGE_FILTER_TEXT,
    filterText
})

export const initializeState = (datasets) => {
    return ({
        type: ActionTypes.INITIALIZE_STATE,
        datasets
    })
}

export const fetchRecords = (dataset_id) => (dispatch, getState) => {
    const state = getState()
    if (!state.isFetching[dataset_id]) {
        dispatch({
            type: ActionTypes.FETCH_RECORDS,
            dataset_id,
        })

        fetch('/api/datainfo/')
            .then(response => response.json())
            .then(data => {
                dispatch(
                    receiveRecords(dataset_id, data.results))
            })
            .catch(error => {
                console.log(error.message)

                dispatch({
                    type: ActionTypes.CANCEL_FETCHING
                })
            })
    }

}

export const receiveRecords = (dataset_id, records) => (dispatch) => {
    //extract table header from records
    let header;
    if (records && records.length > 0) {
        header = Object.keys(records[0])
    }
    //extract table body from records
    const rows = [];
    records.forEach(record => rows.push(Object.values(record)))
    dispatch({
        type: ActionTypes.RECEIVE_RECORDS,
        dataset_id,
        header,
        body: rows,
    })
}