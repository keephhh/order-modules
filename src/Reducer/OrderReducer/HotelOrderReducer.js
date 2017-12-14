import { handleActions } from 'redux-actions';

import {
    SEARCH_FINISH,
    SEARCH_START,
    DISPLAY_START,
    DISPLAY_FINISH,
    CHANGE_VALUE,
    CLEAR_HOTEL_RECORD,
} from '../../Action/OrderAction';


const initialState = {
    list: [],
    flight: [],
    orderId: '',
    reservedPhone: '',
    userId: '',
    hotelName: '',
    orderType: '',
    orderTime: ''
};

export default handleActions({
    [SEARCH_START]: (state) => {
        return {...state};
    },
    [SEARCH_FINISH]: (state, action) => {
        return {...state, list: action.payload.page_list};
    },

    [DISPLAY_START]: (state) => {
        return {...state};
    },
    [DISPLAY_FINISH]: (state, action) => {
        return {...state, flight: action.payload.page_list};
    },
    [CHANGE_VALUE]: (state, action) => {
        return {
            ...state,
            orderId:action.payload.orderId,
            reservedPhone:action.payload.reservedPhone,
            userId:action.payload.userId,
            hotelName:action.payload.hotelName,
        }
    },
    [CLEAR_HOTEL_RECORD]: (state) => {
        return {...state,
            orderId: initialState.orderId,
            reservedPhone: initialState.reservedPhone,
            userId: initialState.userId,
            hotelName: initialState.hotelName
        };
    },
}, initialState);
