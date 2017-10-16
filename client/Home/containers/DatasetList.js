'use strict'

import {connect} from 'react-redux'
import DatasetList from '../components/DatasetList'
import {fetchMeta, fetchRecords, selectTab, toggleImage} from '../../actions/Actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    onImageToggle: datasetId => dispatch(toggleImage(datasetId)),
    onMetaLoad: datasetId => dispatch(fetchMeta(datasetId)),
    onPreviewLoad: datasetId => dispatch(fetchRecords(datasetId)),
    onSelectTab: (datasetId, tab) => dispatch(selectTab(datasetId, tab)),
})

const Container = connect(
    mapStateToProps, mapDispatchToProps
)(DatasetList)

export default Container