import React, { Component } from 'react';
import { Collapse } from 'antd';
import './style.css'

const Panel = Collapse.Panel;



class SideMenu extends Component {
    constructor () {
        super()
        this.state = {
            display: false
        }
    }

    render() {
        const text = `A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`;

        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        return (
            <div className="search-left left">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <div className="order-message">
                    <i className="icon-long">&#xe602;</i>
                    <span className="order-name">LUCKTRIP</span>
                    <span className="order-post">后台管理</span>
                </div>
                <div className="menu">
                    <div className={(this.state.display ? "active" : "")}
                         onClick={() => {this.handleClick()}}
                    >
                        <span>酒店订单</span>
                    </div>


                    <div className={(this.props.active === "plane" ? "active" : "")}
                         onClick={() => {this.handleClick("people")}}
                    >
                        <i className="icon-people"></i>
                        <span>机票订单</span>
                    </div>
                    <div className={(this.props.active === "sale" ? "active" : "")}
                         onClick={() => {this.handleClick("pic")}}>
                        <i className="icon-pic"></i>
                        <span>销售订单</span>
                    </div>
                    <div className={(this.props.active === "service" ? "active" : "")}
                         onClick={() => {this.handleClick("pic")}}>
                        <i className="icon-pic"></i>
                        <span>售后订单</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideMenu;