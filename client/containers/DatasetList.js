'use strict'

import {connect} from 'react-redux'
import DatasetList from '../components/DatasetList'
import {fetchMeta, fetchRecords, selectTab} from '../actions/Actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    onMetaLoad: datasetId => dispatch(fetchMeta(datasetId)),
    onPreviewLoad: datasetId => dispatch(fetchRecords(datasetId)),
    onSelectTab: (datasetId, tab) => dispatch(selectTab(datasetId, tab)),
})

const Container = connect(
    mapStateToProps, mapDispatchToProps
)(DatasetList)

export default Container