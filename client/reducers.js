'use strict'

import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import ActionTypes from './actions/ActionTypes'
import {TabTitles} from './constants'

function getIds(datasets){
    return datasets.map(dataset => dataset.id)
}

function initialStateDictionary(keys, initialValue){
    const dictionary = {}
    keys.forEach(key => {
        dictionary[key] = initialValue
    })
    return dictionary
}

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
                format: file.format,
                size: file.num_records,
            })
        )
        return datasets
    }
    return state
}

const metainfo = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return initialStateDictionary(getIds(action.datasets), undefined)

        case ActionTypes.RECEIVE_META:
            return Object.assign({}, state, {
                [action.datasetId]: action.metainfo,
            })

        default:
            return state
    }
}

const previewContent = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return initialStateDictionary(getIds(action.datasets), undefined)

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

const filterText = (state = '', action) =>
    action.type === ActionTypes.CHANGE_FILTER_TEXT ?
        action.filterText :
        state

const isFetchingRecords = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return initialStateDictionary(getIds(action.datasets), false)

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

const isFetchingMetadata = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return initialStateDictionary(getIds(action.datasets), false)


        case ActionTypes.FETCH_META:
            return Object.assign({}, state, {
                [action.datasetId]: true
            })

        case ActionTypes.RECEIVE_META:
            return Object.assign({}, state, {
                [action.datasetId]: false
            })

        case ActionTypes.CANCEL_META:
            return Object.assign({}, state, {
                [action.datasetId]: false
            })

        default:
            return state
    }
}

const isImageOpen = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_STATE:
            return initialStateDictionary(getIds(action.datasets), false)

        case ActionTypes.TOGGLE_IMAGE:
            return Object.assign({}, state, {
                [action.datasetId]: !state[action.datasetId]
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
    metainfo,
    previewContent,
    ui: combineReducers({
        filterText,
        isFetchingRecords,
        isFetchingMetadata,
        isImageOpen,
        selectedTab
    }),
    routing,
})