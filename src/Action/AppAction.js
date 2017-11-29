import { createAction } from 'redux-actions';

export const SHOW_FLAG = 'SHOW_FLAG';
const showflag = createAction(SHOW_FLAG);

export const SHOW_INIT = 'SHOW_INIT';
const showinit = createAction(SHOW_INIT);


export  {
    showflag,
    showinit
}