import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router'
class ClientMesType extends Component {
    constructor() {
        super()
    }


    render() {
        const { focus, others } = this.props;
        return (
            <div className="clearfiex">
                <div className="head-navigation">
                    <Menu
                        onClick={this.props.handleSearch}
                        selectedKeys={[this.props.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Link to="/clientDetail">客户基础资料</Link>
                        </Menu.Item>
                        <Menu.Item key='1'>
                            <Link to="/clientDetail/account">账户资产详情</Link>
                        </Menu.Item >
                        <Menu.Item key='2'>
                            <Link to="/clientDetail/order">订单记录</Link>
                        </Menu.Item >
                        <Menu.Item key='3'>
                            <Link to="/clientDetail/transCoding">转码成功</Link>
                        </Menu.Item >
                        <Menu.Item key='4'>
                            <Link to="/clientDetail/integral">积分账户</Link>
                        </Menu.Item >
                        <Menu.Item key='5'>
                            <Link to="/clientDetail/serverLog">服务日志</Link>
                        </Menu.Item >
                    </Menu>
                </div>
            </div>
        );
    }
}


export default ClientMesType;