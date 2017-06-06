"use strict";

import {connect} from "react-redux";
import DatasetList from "../components/DatasetList";

const mapStateToProps = (state) => {
    return state;
};

const Container = connect(
    mapStateToProps,
)(DatasetList);

export default Container;