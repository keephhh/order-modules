import {asyncAction} from './CommonAction'

import { createAction } from 'redux-actions';

export const SEARCH_START = 'PEOPLE_SEARCH_START';
export const SEARCH_FINISH = 'PEOPLE_SEARCH_FINISH';
const searchStart = createAction(SEARCH_START);
const searchFinish = createAction(SEARCH_FINISH, (data) => data);
const display = () => asyncAction('http://t.casino.moreton.cn:8080/lucky//admin/flight/order/list/?action=1',
    searchStart, searchFinish);


export  {
    display
}