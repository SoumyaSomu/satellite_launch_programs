import { UPDATE_FILTER,CLEAR_FILTER } from './actionTypes.js';

export const updateFilter = dispatch => (
    payload => {
        return new Promise((resolve) => {
            dispatch({
                type: UPDATE_FILTER,
                payload,
            });
            Promise.resolve()
        })
    }
)

export const clearFilter = dispatch => (
    payload => {
        dispatch({
            type: CLEAR_FILTER,
        });
    }
)