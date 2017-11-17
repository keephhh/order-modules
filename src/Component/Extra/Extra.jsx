import React, { Component } from 'react';
import {Menu, Icon, Dropdown} from 'antd'


class Extra extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    我的信息
                </Menu.Item>
                <Menu.Item key="1">
                    切换账号
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    注销登录
                </Menu.Item>
            </Menu>
        )
        return (
                <div className="extra-message">
                    <div className={(this.props.status === "avatar" ? "avatar-message" : "")}>
                        <img className="extra-message-avatar" src="http://www.ld12.com/upimg358/allimg/20160630/0811446121497071.jpg" alt=""/>
                        <Dropdown overlay={menu} trigger={['click']}>
                                 <span className="ant-dropdown-link" href="#">
                                     黑色星期六 <Icon type="down" />
                                 </span>
                        </Dropdown>

                    </div>
                    <div className={(this.props.status === "order" ? "extra-message-box" : "")}>
                        <span className="extra-message-span">搜索到1297个相关订单  >></span>
                        <i className="icon-daochu">&#xe7fb;</i>
                        <span>导出</span>
                    </div>
                </div>
        );
    }
}

export default Extra;