import React, { Component } from 'react';
import { Menu } from 'antd';
import Extra from '../../../Component/Extra/Extra'
import {connect} from 'react-redux'

import './style.css'


class Head extends Component {
    constructor() {
        super()
    }


    render() {
        const { focus, others ,active, account} = this.props;
        return (
            <div className="clearfiex">
                <div className="head-navigation">
                    <Menu
                        onClick={this.props.handleSearch}
                        selectedKeys={[this.props.current]}
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
                        <Extra  status={active}
                                number={account}
                        />
                    </Menu>
                </div>
            </div>
        );
    }
}


export default connect()(Head);