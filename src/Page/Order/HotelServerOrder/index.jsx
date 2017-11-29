import React, { Component } from 'react';
import  Head from '../../SmartComponent/Menu/Menu';
import FormHeader from './SubPage/FormHeader';
import SearchRecord from './SubPage/SearchRecord'
import Navigation from '../../../Component/Navigation/Navigation'

import {connect} from 'react-redux'
import {  displayHotel } from '../../../Action/OrderAction';

import './index.css';



class ServerOrder extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        displayHotel()(dispatch)
    }
    render() {
        let { list } = this.props;
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']
        const navigation = ['订单管理','酒店订单','售后订单']
        return (
            <div className="order-module">
                <Head focus={'订单管理'} others={options} active={'order'}/>
                <Navigation lines={navigation} ebutton={'none'}  />
                <FormHeader />
                <SearchRecord record={list} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.HotelOrderReducer.list,
});

export default connect(mapStateToProps)(ServerOrder);




