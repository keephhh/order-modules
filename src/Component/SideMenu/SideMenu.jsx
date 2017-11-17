import React, { Component } from 'react';
import { Collapse } from 'antd';
import './style.css'

const Panel = Collapse.Panel;



class SideMenu extends Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
     callback(key) {
    }
    handleClick () {
        console.log('111')
    }
    render() {
        return (
            <div className="search-left left">
                <div className="order-message">
                    <i className="icon-long">&#xe602;</i>
                    <div className="order-right">
                        <span className="order-post">后台管理</span>
                        <span className="order-name">LUCKTRIP</span>
                    </div>
                </div>
                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                    <Panel header="酒店订单" key="1">
                        <div className="sale order"
                             onClick={() => {this.handleClick()}}
                        >
                            <span>销售订单</span>
                        </div>
                        <div className="server order"
                             onClick={() => {this.handleClick("people")}}
                        >
                            <i className="icon-people"></i>
                            <span>售后订单</span>
                        </div>
                    </Panel>
                    <Panel header="机票订单" key="2">
                        <div className="hotel order"
                             onClick={() => {this.handleClick("pic")}}>
                            <i className="icon-pic"></i>
                            <span>其他订单</span>
                        </div>
                    </Panel>
                </Collapse>


            </div>
        );
    }
}

export default SideMenu;