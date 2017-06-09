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

const previewContent = (state = {}, action) => {
    if (action.type === ActionTypes.INITIALIZE_STATE) {
        const previewContent = {}
        action.datasets.forEach(dataset => {
            previewContent[dataset.id] = undefined
        })
        return previewContent
    }
    return state
}

const isFetching = (state = {}, action) => {
    if (action.type === ActionTypes.INITIALIZE_STATE) {
        const isFetching = {}
        action.datasets.forEach(dataset => {
            isFetching[dataset.id] = false
        })
        return isFetching
    }
    return state
}

export default combineReducers({
    datasets,
    filterText,
    previewContent,
    isFetching,
})