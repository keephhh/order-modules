import {asyncAction} from './CommonAction'

import { createAction } from 'redux-actions';

export const SEARCH_START = 'PEOPLE_SEARCH_START';
export const SEARCH_FINISH = 'PEOPLE_SEARCH_FINISH';

export const DISPLAY_START = 'PEOPLE_DISPLAY_START';
export const DISPLAY_FINISH = 'PEOPLE_DISPLAY_FINISH';

export const CHANGE_VALUE = 'CHANGE_VALUE';
const changeValue = createAction(CHANGE_VALUE);

export const CHANGE_FLIGHT_VALUE = 'CHANGE_FLIGHT_VALUE';
const changeFlightValue = createAction(CHANGE_FLIGHT_VALUE)



const searchStart = createAction(SEARCH_START);
const searchFinish = createAction(SEARCH_FINISH, (data) => data);

const displayStart = createAction(DISPLAY_START);
const displayFinish = createAction(DISPLAY_FINISH, (data) => data);

export const CLEAR_HOTEL_RECORD = "CLEAR_HOTEL_RECORD";
const clearHotelRecord = createAction(CLEAR_HOTEL_RECORD);

export const CLEAR_FLIGHT_RECORD = "CLEAR_FLIGHT_RECORD";
const clearFlightRecord = createAction(CLEAR_FLIGHT_RECORD);


const displayHotel = () => asyncAction('http://t.casino.moreton.cn:8080/lucky/admin/hotel/order/list?action=1',
    searchStart, searchFinish);
const displayFlight = () => asyncAction('http://t.casino.moreton.cn:8080/lucky/admin/flight/order/list?action=1&admin_id=1',
    displayStart, displayFinish);


export  {
    displayHotel,
    displayFlight,
    changeValue,
    changeFlightValue,
    clearHotelRecord,
    clearFlightRecord,
}