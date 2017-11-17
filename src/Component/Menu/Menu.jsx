import React, { Component } from 'react';
import { Menu } from 'antd';
import Extra from '../Extra/Extra'


import './style.css'




class Head extends Component {
    constructor () {
        super()
        this.state = {
            current: 'mail',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
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

export default Head;