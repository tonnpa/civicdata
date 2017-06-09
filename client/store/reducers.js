'use strict'

import {combineReducers} from 'redux'
import ActionTypes from '../actions/ActionTypes'

const datasets = (state = [], action) =>
    action.type === ActionTypes.INITIALIZE_STATE ?
        action.datasets :
        state

const filterText = (state = '', action) =>
    action.type === ActionTypes.CHANGE_FILTER_TEXT ?
        action.filterText :
        state

const isFetching = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            const isFetching = {}
            action.datasets.forEach(dataset => {
                isFetching[dataset.id] = false
            })
            return isFetching

        case ActionTypes.FETCH_RECORDS:
            return Object.assign({}, state, {
                [action.dataset_id]: true
            })

        case ActionTypes.RECEIVE_RECORDS:
            return Object.assign({}, state, {
                [action.dataset_id]: false
            })

        case ActionTypes.CANCEL_FETCHING:
            return Object.assign({}, state, {
                [action.dataset_id]: false
            })

        default:
            return state
    }
}

const previewContent = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            const previewContent = {}
            action.datasets.forEach(dataset => {
                previewContent[dataset.id] = undefined
            })
            return previewContent

        case ActionTypes.RECEIVE_RECORDS:
            return Object.assign({}, state, {
                [action.dataset_id]: {
                    header: action.header,
                    body: action.body,
                }
            })

        default:
            return state
    }

}

export default combineReducers({
    datasets,
    filterText,
    isFetching,
    previewContent,
})