'use strict';

import {connect} from 'react-redux'
import {togglePreview} from '../actions/Actions';
import DatasetList from '../components/DatasetList';

const mapStateToProps = (state) => {
	console.log(state);
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPreviewClick: (id) => {
			dispatch(togglePreview(id))
		}
	};
};

const VisibleDataset = connect(
	mapStateToProps,
	mapDispatchToProps
)(DatasetList);

export default VisibleDataset;