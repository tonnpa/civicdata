/**
 * Created by tonnpa on 7/6/17.
 */
'use strict'

import {connect} from 'react-redux'
import Navigation from '../components/Navigation'
import {changeFilterText} from '../actions/Actions'

const mapStateToProps = state => ({
    datasets: state.datasets.map(dataset => {
        return {
            id: dataset.id,
            title: dataset.title,
        }
    }),
    filterText: state.filterText,
})

const mapDispatchToProps = dispatch => ({
    onSearchInputChange: text => dispatch(changeFilterText(text))
})

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation)
export default Container