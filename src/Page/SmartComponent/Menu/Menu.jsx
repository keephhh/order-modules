import React, { Component } from 'react';
import { Menu } from 'antd';
import Extra from '../../../Component/Extra/Extra'
import { browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {showflag} from "../../../Action/AppAction"


import './style.css'




class Head extends Component {
    constructor () {
        super()
    }
    handleClick = (e) => {
        localStorage.setItem('status', 'sale')
        localStorage.setItem('topType', e.key);
        console.log('click ', e.item.props.children);

        const {dispatch} = this.props;
        dispatch(showflag(e.item.props.children))

        localStorage.setItem('leftType',e.item.props.children)

        if(e.item.props.children == 'CRM') {
            browserHistory.push('/client')
        }
        if(e.item.props.children == '订单管理') {
            browserHistory.push('/')
        }
        if(e.item.props.children == '合作商户') {
            browserHistory.push('/cooperative')
        }
        if(e.item.props.children == '内容运营') {
            browserHistory.push('/contentOperation')
        }
        if(e.item.props.children == 'POST管理') {
            browserHistory.push('/post')
        }
        if(e.item.props.children == '财务对账') {
            browserHistory.push('/finance')
        }
        if(e.item.props.children == '系统设置') {
            browserHistory.push('/system')
        }
    }

    render() {

        const { focus, others ,active} = this.props;
        return (
         <div className="clearfiex">
             <div className="head-navigation">
                 <Menu
                     onClick={this.handleClick}
                     selectedKeys={[localStorage.getItem('topType')]}
                     mode="horizontal"
                 >
                     <Menu.Item key="mail">
                         {focus}
                     </Menu.Item>
                     {
                         others.map((other, i) =>
                             <Menu.Item key={i}>
                                 {other}
                             </Menu.Item >)
                     }
                     <Extra  status={active} />
                 </Menu>
             </div>
         </div>
        );
    }
}


export default connect()(Head);