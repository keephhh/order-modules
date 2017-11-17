import React, { Component } from 'react';
import SideMenu from '../../Component/SideMenu/SideMenu';
import  Head from '../../Component/Menu/Menu';
import FormHeader from './SubPage/FormHeader';
import SearchRecord from './SubPage/SearchRecord'

import {connect} from 'react-redux'
import {  display } from '../../Action/OrderAction';

import './index.css';



class Order extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        display()(dispatch)
    }
  render() {
      let { list } = this.props;
      const options = ['合作商户','内容编辑','财务对账','CRM','配置']
      return (
          <div className="order-module">
              <SideMenu />
              <Head focus={'订单管理'} others={options} active={'order'}/>
              <FormHeader />
              <SearchRecord record={list} />
          </div>
    );
  }
}

const mapStateToProps = state => ({
    list: state.OrderReducer.list,
});

export default connect(mapStateToProps)(Order);




