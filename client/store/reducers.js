'use strict'

import {combineReducers} from 'redux'
import ActionTypes from '../actions/ActionTypes'
import {TabTitles} from '../constants'

const datasets = (state = [], action) => {
    if (action.type === ActionTypes.INITIALIZE_STATE) {
        const idToIndex = {}
        const datasets = action.datasets
        datasets.forEach((dataset, index) => {
            dataset.files = []
            idToIndex[dataset.id] = index
        })
        action.datafiles.forEach(file =>
            datasets[idToIndex[file.dataset_id]].files.push({
                name: file.name,
                format: file.format
            })
        )
        return datasets
    }
    return state
}

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
                [action.datasetId]: true
            })

        case ActionTypes.RECEIVE_RECORDS:
            return Object.assign({}, state, {
                [action.datasetId]: false
            })

        case ActionTypes.CANCEL_FETCHING:
            return Object.assign({}, state, {
                [action.datasetId]: false
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
                [action.datasetId]: {
                    header: action.header,
                    body: action.body,
                }
            })

        default:
            return state
    }
}

const selectedTab = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            const selectedTab = {}
            action.datasets.forEach(dataset => {
                selectedTab[dataset.id] = TabTitles.DESCRIPTION
            })
            return selectedTab

        case ActionTypes.SELECT_TAB:
            return Object.assign({}, state, {
                [action.datasetId]: action.tab
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
    ui: combineReducers({
        selectedTab
    })
})