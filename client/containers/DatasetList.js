'use strict'

import {connect} from 'react-redux'
import DatasetList from '../components/DatasetList'
import {fetchRecords, selectTab} from '../actions/Actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    onPreviewLoad: dataset_id => dispatch(fetchRecords(dataset_id)),
    onSelectTab: (dataset_id, tab) => dispatch(selectTab(dataset_id, tab)),
})

const Container = connect(
    mapStateToProps, mapDispatchToProps
)(DatasetList)

export default Container