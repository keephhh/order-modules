import {combineReducers} from 'redux';
import HotelOrderReducer from './HotelOrderReducer';
import CommonReducer from '../CommonReducer'
import FlightOrderReducer from './FlightOrderReducer'

const oReducer = combineReducers({
    HotelOrderReducer,
    FlightOrderReducer,
    CommonReducer
});

export default oReducer;
