'use strict'

import {connect} from 'react-redux'
import DatasetList from '../components/DatasetList'
import {fetchRecords} from '../actions/Actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    onPreviewLoad: dataset_id => dispatch(fetchRecords(dataset_id))
})

const Container = connect(
    mapStateToProps, mapDispatchToProps
)(DatasetList)

export default Container