/**
 * Created by tonnpa on 6/2/17.
 */
"use strict";

import {connect} from "react-redux";
import SideMenu from "../components/SideMenu";

const mapStateToProps = (state) => {
    return {
        datasets: state.datasets.map(dataset => {
            return {
                id: dataset.id,
                title: dataset.title,
            }
        })
    }
};

const Container = connect(mapStateToProps)(SideMenu);
export default Container;
