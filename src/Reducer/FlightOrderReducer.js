import { handleActions } from 'redux-actions';
import {
    CHANGE_FLIGHT_VALUE,
    CLEAR_FLIGHT_RECORD
} from '../Action/OrderAction';

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
    [CHANGE_FLIGHT_VALUE]: (state, action) => {
        return {
            ...state,
            orderId:action.payload.orderId,
            reservedPhone:action.payload.reservedPhone,
            userId:action.payload.userId,
            hotelName:action.payload.hotelName,
        }
    },
    [CLEAR_FLIGHT_RECORD]: (state) => {
        return {...state,
            orderId: initialState.orderId,
            reservedPhone: initialState.reservedPhone,
            userId: initialState.userId,
        };
    },

}, initialState);