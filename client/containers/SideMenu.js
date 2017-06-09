/**
 * Created by tonnpa on 6/2/17.
 */
'use strict'

import {connect} from 'react-redux'
import SideMenu from '../components/SideMenu'
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
    mapDispatchToProps
)(SideMenu)
export default Container
