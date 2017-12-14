import { handleActions } from 'redux-actions';

import {
    SHOW_FLAG,
    SHOW_INIT,
} from '../Action/AppAction';


const initialState = {
    isModule: localStorage.getItem('leftType'),
};


export default handleActions({
    [SHOW_FLAG]: (state, action) => {
        return {...state, isModule:action.payload};
    },
    [SHOW_INIT]: (state) => {
        return {...state, isModule: ''}
    }
}, initialState);