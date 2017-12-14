import React, { Component } from 'react';
import  Head from '../../SmartComponent/Menu/Menu';
import FlightHead from './SubPage/FormHeader'
import SearchRecord from './SubPage/SearchRecord'
import Navigation from '../../../Component/Navigation/Navigation'

import {connect} from 'react-redux'
import {  displayFlight } from '../../../Action/OrderAction';

import './index.css';


class FlightOrder extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayFlight()(dispatch)
    }

    render() {
        let { flight } = this.props;
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']
        const navigation = ['订单管理','机票订单','销售订单']
        const buttonType = {
            export: 'export',
            create: 'create',
        }
        return (
            <div className="order-module">
                <Head focus={'订单管理'} others={options} active={'order'}/>
                <Navigation lines={navigation}  ebutton={buttonType} />
                <FlightHead />
                <SearchRecord record={flight} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flight: state.HotelOrderReducer.flight,
});

export default connect(mapStateToProps)(FlightOrder);