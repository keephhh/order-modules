import { handleActions } from 'redux-actions';

import {
    SEARCH_FINISH,
    SEARCH_START
} from '../Action/OrderAction';


const initialState = {
    list: []
};

export default handleActions({
    [SEARCH_START]: (state) => {
        return {...state};
    },
    [SEARCH_FINISH]: (state, action) => {
        return {...state, list: action.payload};
    },
}, initialState);
