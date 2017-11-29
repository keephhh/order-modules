import React, { Component } from 'react';
import { browserHistory} from 'react-router'
import {connect} from 'react-redux'
import { Collapse } from 'antd';
import './style.css'

const Panel = Collapse.Panel;



class SideMenu extends Component {
    constructor (context) {
        super(context)
        this.state = {
            status: localStorage.getItem('status')
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        localStorage.setItem('status', 'sale')
    }
     callback(key) {
    }
    handleClick(route) {
        localStorage.setItem('status', route)
        switch (route) {
            case 'sale':
                browserHistory.push('/')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'hotelserver':
                browserHistory.push('/hotelserver')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'flight':
                browserHistory.push('/flight')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'flightserver':
                browserHistory.push('/flightserver')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'error':
                browserHistory.push('/error')
                break;
        }

    }
    render() {
        const { isModule } = this.props
        return (
            <div>
                {
                    isModule === '订单管理'
                    ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            销售订单
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            售后订单
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            销售订单（10）
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            售后订单（7）
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === '合作商户'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            合作商户
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            合作商户哈哈
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            再来一次
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            1凡凡阿萨
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === 'CRM'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            CRM
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            CRM哈哈
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            再来一次
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            12阿萨
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === '内容运营'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            内容运营
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            内容运营哈哈
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            法法师次
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            12阿萨
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === 'POST管理'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            POST管理
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            POST管理哈哈
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            发生的方法
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            12史蒂芬孙
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === '财务对账'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            财务对账
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            财务对账
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            再发生的
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            乖乖
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
                {
                    isModule === '系统设置'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="sidemenu-order">
                                <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                    <Panel header="酒店订单" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("sale")}}
                                        >
                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                            系统设置
                        </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}
                                        >
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                            系统设置
                        </span>
                                        </div>
                                    </Panel>
                                    <Panel header="机票订单" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                            扣扣
                        </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                            老擦拭
                        </span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        : ''
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isModule: state.CommonReducer.isModule,
});


export default connect(mapStateToProps)(SideMenu);