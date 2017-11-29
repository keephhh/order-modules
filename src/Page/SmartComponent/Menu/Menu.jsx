import React, { Component } from 'react';
import {showflag} from "../../../Action/AppAction"
import { Menu } from 'antd';
import Extra from '../../../Component/Extra/Extra'
import {connect} from 'react-redux'


import './style.css'




class Head extends Component {
    constructor () {
        super()
        this.state = {
            current: 'mail',
        }
    }
    handleClick = (e) => {
        console.log('click ', e.item.props.children);
        this.setState({
            current: e.key,
        });
        const { dispatch } = this.props
        dispatch(showflag(e.item.props.children))
    }

    render() {

        const { focus, others ,active} = this.props;
        return (
         <div className="clearfiex">
             <div className="head-navigation">
                 <Menu
                     onClick={this.handleClick}
                     selectedKeys={[this.state.current]}
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