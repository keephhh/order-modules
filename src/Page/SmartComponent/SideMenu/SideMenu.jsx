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
            status: localStorage.getItem('status'),
        }

        this.handleClick = this.handleClick.bind(this)
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
            case 'client':
                browserHistory.push('/client')
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
        const {isModule} = this.props
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
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                商户信息
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("error")}}>
                                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                                CRM
                                            </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}>
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                                CRM哈哈
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="代理销售" key="2">
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
                    isModule === 'CRM'
                        ? <div className="search-left left">
                            <div className="order-message">
                                <img src={require("../../../images/logo.png")} alt=""/>
                            </div>
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                客户信息
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order">
                                            <span>
                                                CRM
                                            </span>
                                        </div>
                                        <div className="server order">
                                            <i className="icon-people"></i>
                                            <span>
                                                哈哈
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="代理销售" key="2">
                                        <div className="hotel order">
                                            <i className="icon-pic"></i>
                                            <span>
                                                再来一次
                                            </span>
                                        </div>
                                        <div className="hotel order">
                                            <i className="icon-pic"></i>
                                            <span>
                                                12阿萨
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="转码记录管理" key="3">
                                        <div className="sale order">
                                            <span>
                                                ABC
                                            </span>
                                        </div>
                                        <div className="server order">
                                            <span>
                                                珏净空
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
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                运营客商
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("error")}}>
                                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                                ABC
                                            </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}>
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                                SKT
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="运营销售" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                                RNG
                                            </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                                EDG
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
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                运营客商
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("error")}}>
                                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                                ABC
                                            </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}>
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                                SKT
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="运营销售" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                                RNG
                                            </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                                EDG
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
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                运营客商
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("error")}}>
                                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                                ABC
                                            </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}>
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                                SKT
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="运营销售" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                                RNG
                                            </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                                EDG
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
                            <div className="client-message" onClick={() => {this.handleClick("client")}}>
                                运营客商
                            </div>
                            <div className="sidemenu-order">
                                <Collapse onChange={this.callback()}>
                                    <Panel header="售前管理" key="1">
                                        <div className="sale order"
                                             onClick={() => {this.handleClick("error")}}>
                                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                                ABC
                                            </span>
                                        </div>
                                        <div className="server order"
                                             onClick={() => {this.handleClick("hotelserver")}}>
                                            <i className="icon-people"></i>
                                            <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                                SKT
                                            </span>
                                        </div>
                                    </Panel>
                                    <Panel header="运营销售" key="2">
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flight")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                                RNG
                                            </span>
                                        </div>
                                        <div className="hotel order"
                                             onClick={() => {this.handleClick("flightserver")}} >
                                            <i className="icon-pic"></i>
                                            <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                                EDG
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
    isModule: state.CommonReducer.isModule
});


export default connect(mapStateToProps)(SideMenu);