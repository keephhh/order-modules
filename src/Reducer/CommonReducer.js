import { handleActions } from 'redux-actions';

import {
    SHOW_FLAG,
    SHOW_INIT,
} from '../Action/AppAction';


const initialState = {
    isModule: '订单管理',
};


export default handleActions({
    [SHOW_FLAG]: (state, action) => {
        return {...state, isModule:action.payload};
    },
    [SHOW_INIT]: (state) => {
        return {...state, isModule: ''}
    }
}, initialState);