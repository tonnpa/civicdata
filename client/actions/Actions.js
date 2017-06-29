'use strict'

import ActionTypes from './ActionTypes';
import fetch from 'isomorphic-fetch';

export const changeFilterText = (filterText) => ({
    type: ActionTypes.CHANGE_FILTER_TEXT,
    filterText
})

export const initializeState = (datasets, datafiles) => ({
    type: ActionTypes.INITIALIZE_STATE,
    datasets,
    datafiles,
})

export const selectTab = (datasetId, tab) => ({
    type: ActionTypes.SELECT_TAB,
    datasetId,
    tab,
})

export const toggleImage = (datasetId) => ({
    type: ActionTypes.TOGGLE_IMAGE,
    datasetId,
})

export const fetchRecords = (datasetId) => (dispatch, getState) => {
    const state = getState()
    if (!state.ui.isFetchingRecords[datasetId]) {
        dispatch({
            type: ActionTypes.FETCH_RECORDS,
            datasetId,
        })

        fetch(`/preview?id=${datasetId}`)
            .then(response => response.json())
            .then(data => dispatch(
                receiveRecords(datasetId, data)
            ))
            .catch(error => {
                console.log(error.message)
                dispatch({
                    type: ActionTypes.CANCEL_FETCHING
                })
            })
    }
}

export const receiveRecords = (datasetId, data) => (dispatch) => {
    dispatch({
        type: ActionTypes.RECEIVE_RECORDS,
        datasetId,
        header: data.columns,
        body: data.values,
    })
}

export const fetchMeta = (datasetId) => (dispatch, getState) => {
    const state = getState()
    if (state.metainfo[datasetId] === undefined &&
        !state.ui.isFetchingMetadata[datasetId]) {
        dispatch({
            type: ActionTypes.FETCH_META,
            datasetId,
        })

        fetch(`/api/metainfo?dataset_id=${datasetId}`)
            .then(response => response.json())
            .then(metainfo => dispatch(
                receiveMeta(datasetId, metainfo)
            ))
            .catch(error => {
                console.log(error.message)
                dispatch({
                    type: ActionTypes.CANCEL_FETCHING_META,
                })
            })
    }
}

export const receiveMeta = (datasetId, metainfo) => (dispatch) => {
    dispatch({
        type: ActionTypes.RECEIVE_META,
        datasetId,
        metainfo,
    })
}