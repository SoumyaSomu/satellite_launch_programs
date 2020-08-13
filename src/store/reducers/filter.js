import { UPDATE_FILTER,CLEAR_FILTER } from '../actions/actionTypes.js';

export default function FilterReducer(state = {} , action) {
    switch (action.type) {
        case UPDATE_FILTER:
 
            return Object.assign({}, state, action.payload);

        case CLEAR_FILTER:
            return {};

        default:
            return state;
    }
}