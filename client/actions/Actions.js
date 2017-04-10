'use strict';

import ActionTypes from './ActionTypes';

/*
 * action creators
 */

export function togglePreview(id) {
	return { type: ActionTypes.TOGGLE_PREVIEW, id }
}
