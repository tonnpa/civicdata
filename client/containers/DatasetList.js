'use strict'

import {connect} from 'react-redux'
import DatasetList from '../components/DatasetList'
import {fetchRecords, selectTab} from '../actions/Actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    onPreviewLoad: datasetId => dispatch(fetchRecords(datasetId)),
    onSelectTab: (datasetId, tab) => dispatch(selectTab(datasetId, tab)),
})

const Container = connect(
    mapStateToProps, mapDispatchToProps
)(DatasetList)

export default Container