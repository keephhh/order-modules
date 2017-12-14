import React, { Component } from 'react';
import {connect} from 'react-redux'
import  Head from '../../SmartComponent/Menu/Menu';
import Navigation from '../../../Component/Navigation/Navigation'
import { Select, Radio, Icon} from 'antd';

import {getLocalTime} from "../../../Action/CommonAction"

import {  displayFlight } from '../../../Action/OrderAction';

import './index.css';
const Option = Select.Option;
const RadioGroup = Radio.Group;

class FDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 1,
            account: '',
            isDisplay: false,
            isSelect: false,
            isClose: false,
            isWaitPay: false,
            isSuccess: false,
            isServer1: false,
            isServer2: false,
            isServer3: false,
            isEndorse1: false,
            isEndorse2: false,
            isEndorse3: false,
            isEndorse4: false,
            isEndorse5: false,
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayFlight()(dispatch)
    }

    handleSelect () {
        this.setState({
            isSelect: !this.state.isSelect
        })
    }
    handleChange (value) {
        this.setState({
            account: value
        })
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置'];

        const navigation = ['订单管理','机票订单','销售订单','订单详情']

        const {flight} = this.props;
        let datas = [];
        flight.filter((option,key) => {
            if(option !== '') {
                return option.flightOrderId == this.props.params.detail.substring(1)
            } else {
                return ''
            }
        }).map((data, i) => {
            datas.push(data)
        })

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div className="order-module">
                <Head focus={'订单管理'} others={options} active={'order'}/>
                <Navigation lines={navigation}/>
                <div>
                    {
                        datas != '' && datas[0].orderDetail.flights[0]
                            ? <div className="box-flex">
                                <div className="flight-detail-box">
                                    <span className="flight-detail-header"># {datas[0].flightOrderId} - 已出票</span>
                                    <div className="flight-detail-content">
                                        <div className="account">
                                            <div className="account-name">
                                                <label>用户昵称：</label><span>{datas[0].userId}</span>
                                            </div>
                                            <div className="account-number flight-line">
                                                <label>用户账号：</label><span>{datas[0].userId}</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-name">
                                                <label>联系人：</label><span>{datas[0].linkName}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>联系电话：</label><span>{datas[0].linkMobile}</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message margintop">
                                            <div className="account-name">
                                                <label>航班信息：</label><span>{datas[0].orderDetail.flights[0]? datas[0].orderDetail.flights[0].companyName : ''}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>飞机舱位：</label><span>经济舱</span>
                                            </div>
                                            <div className="account-name">
                                                <label>出发时间：</label><span>{getLocalTime(datas[0].orderDetail.flights[0].depTimestamp/1000)}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>到达时间：</label><span>{getLocalTime(datas[0].orderDetail.flights[0].arrTimestamp/1000)}</span>
                                            </div>

                                            <div className="account-name">
                                                <label>飞行时长：</label><span>{datas[0].orderDetail.flights[0].minutes}分钟</span>
                                            </div>

                                            <div className="account-name">
                                                <label>出发机场：</label><span>{datas[0].orderDetail.flights[0].depPortName}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>到达机场：</label><span>{datas[0].orderDetail.flights[0].arrPortName}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>其他备注：</label><span>{datas[0].orderDetail.flights[0].planeInfo}</span>
                                            </div>

                                        </div>
                                        {/*{*/}
                                            {/*datas[0].passengers.map((passenger, i) =>*/}
                                                {/*<div className="account-flex-box" key={i}>*/}
                                                    {/*<div className="account-flex-name">*/}
                                                        {/*乘机人：*/}
                                                    {/*</div>*/}
                                                    {/*<div className="account-flex-people">*/}
                                                        {/*<div>{passenger.nameCn} - 成人</div>*/}
                                                        {/*<div className="account-flex-extra">*/}
                                                            {/*<div className="account-flex-des">*/}
                                                                {/*<span>身份证：</span><span>{passenger.identities[0].identityId}</span>*/}
                                                            {/*</div>*/}
                                                            {/*<div className="account-flex-des">*/}
                                                                {/*<span>取票号：</span><span>{passenger.identities[0].passengerId}</span>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>)*/}
                                        {/*}*/}


                                        <div className="flight-detail-message flight-line">
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-flex-box">
                                                <div className="account-flex-name">
                                                    订单金额：
                                                </div>
                                                <div className="account-flex-people">
                                                    <div>￥1234</div>
                                                    <div className="account-name">
                                                        <label>成人票：</label><span>     ￥310*2人</span>
                                                    </div>
                                                    <div className="account-flex-extra">
                                                        <div className="account-flex-des">
                                                            <label>机票</label><span>￥50</span>
                                                        </div>
                                                        <div className="account-flex-des">
                                                            <label>机场建设费</label><span>￥570</span>
                                                        </div>
                                                        <div className="account-flex-des">
                                                            <label>税和服务费：</label><span>￥80</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="account-name">
                                                <label>应付金额：</label><span>￥130</span>
                                            </div>
                                            <div className="account-name">
                                                <label>支付方式：</label><span>微信 23456765432</span>
                                            </div>
                                            {/*<div className="account-name">*/}
                                                {/*<label>支付单号：</label><span>{datas[0].orderDetail.price.ticketId}</span>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <span>邮寄购票凭证</span>
                                            <div className="account-name">
                                                <label>凭证清单：</label><span>行程单</span>
                                            </div>
                                            <div className="account-name">
                                                <label>配送费用：</label><span>EMS ￥10</span>
                                            </div>
                                            <div className="account-name">
                                                <label>配送地址：</label><span>上海市浦东新区世纪大道777号东方希望大厦1D</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message margintop">
                                            <div className="account-name">
                                                <label>退款状态：</label><span>退款完成</span>
                                            </div>
                                            <div className="account-name">
                                                <label>退款订单：</label><span>87564345678</span>
                                            </div>
                                            <div className="account-name">
                                                <label>应退金额：</label><span>￥1234</span>
                                            </div>
                                            <div className="account-name">
                                                <label>退款账号：</label><span>支付宝2765544678</span>
                                            </div>
                                            <div className="account-name">
                                                <label>实退金额：</label><span>￥1234</span>
                                            </div>
                                            <div className="account-name">
                                                <label>备注说明：</label><span>没有啊</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flight-log-box">
                                        <span className="flight-detail-header">操作日志</span>
                                        <div className="marginleft">
                                            <div className="account-name">
                                                <label>用户下单：</label><span>2017.01.02 14:00</span>
                                            </div>
                                            <div className="account-name">
                                                <label>用户支付：</label><span>2017.01.02 14:00</span>
                                            </div>
                                            <div className="account-name">
                                                <label>预订成功：</label><span>2017.01.02 14:00</span>
                                            </div>
                                            <div className="account-name">
                                                <label>进入退款：</label><span>2017.01.02 14:00</span>
                                            </div>
                                            <div className="account-name">
                                                <label>退款完成：</label><span>2017.01.02 14:00</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {
                                    this.state.isClose
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <button>关闭订单</button>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isWaitPay
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服123</label>跟进操作</span>
                                            <div className="widget-descript">
                                                客人尚未支付，订单将于07.01 14:00关闭
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    !this.state.isSuccess
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服123</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <div className="widget-button button-color" onClick={() => {
                                                    this.setState({
                                                        isServer1: true,
                                                        isSuccess: true,
                                                    })
                                                }}>申请售后</div>
                                                <div className="widget-button" onClick={() => {
                                                    this.setState({
                                                        isSuccess: true,
                                                        isEndorse1: true,
                                                    })
                                                }}>改签</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isServer1
                                        ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <span>申请售后</span>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-descript">
                                                <div className="account-flex-box">
                                                    <div className="account-flex-name">
                                                        乘机人：
                                                    </div>
                                                    <div className="account-flex-people">
                                                        <div>苏三 - 成人</div>
                                                        <div className="account-flex-extra">
                                                            <div className="account-flex-des">
                                                                <span>身份证：</span><span>310109 19890101 2118</span>
                                                            </div>
                                                            <div className="account-flex-des">
                                                                <span>取票号：</span><span>875433456789</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-select">
                                                        <div className={(this.state.isSelect ? "widget-selectd-box" : "widget-select-box")}
                                                           onClick={this.handleSelect.bind(this)} >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-step-area">
                                                    <div> </div>
                                                    <div className="widget-cancle" onClick={() => {
                                                        this.setState({
                                                            isServer1: false,
                                                            isServer2: true,
                                                        })
                                                    }}>
                                                        下一步
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isServer2
                                    ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <span>申请售后</span>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-selectd-name">
                                                已选：苏三、顾二共2人
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>订单金额：</span><span>¥1300</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>手续比例：</span><span className="widget-display-account"><input type="text"/>%</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>其他费用：</span><span>¥10</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>应退费用：</span><span>¥1180</span>
                                            </div>
                                            <div className="widget-selectd-item widget-display-flex">
                                                <span>退款路径：</span>
                                                <div>
                                                    <Select defaultValue="信用账户"  style={{ width: 90 }} onChange={this.handleChange.bind(this)}>
                                                        <Option value="hhh1700">微信</Option>
                                                        <Option value="17727392173">支付宝</Option>
                                                        <Option value="z-27382133">百度钱包</Option>
                                                    </Select>
                                                    <div className="widget-display-account">{this.state.account? this.state.account: ' 请选择你的信用账户'}</div>
                                                </div>
                                            </div>
                                            <div className="widget-step-area">
                                                <div className="widget-next" onClick={() => {
                                                    this.setState({
                                                        isServer2: false,
                                                        isServer1: true,
                                                    })
                                                }}>上一步</div>
                                                <div className="widget-cancle" onClick={() => {
                                                    this.setState({
                                                        isServer2: false,
                                                        isEndorse5: true,
                                                    })
                                                }}>
                                                    提交申请
                                                </div>
                                            </div>
                                        </div>
                                        : ''

                                }
                                {
                                    this.state.isServer3
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-selectd-item">
                                                <span>申请售后，关联订单为：</span><span className="isEndorse-order-number">#SH37484494949</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>新增关联订单为：</span><span className="isEndorse-order-number">#SH37484494949</span>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isEndorse1
                                        ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <div className="icon-margin-left">
                                                    <span>改签机票</span>
                                                    <i className="iconfont iconfont-detail">&#xe64f;</i>
                                                </div>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-descript">
                                                <div className="account-flex-box">
                                                    <div className="account-flex-name">
                                                        乘机人：
                                                    </div>
                                                    <div className="account-flex-people">
                                                        <div>苏三 - 成人</div>
                                                        <div className="account-flex-extra">
                                                            <div className="account-flex-des">
                                                                <span>身份证：</span><span>310109 19890101 2118</span>
                                                            </div>
                                                            <div className="account-flex-des">
                                                                <span>取票号：</span><span>875433456789</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-select">
                                                        <div className={(this.state.isSelect ? "widget-selectd-box" : "widget-select-box")}
                                                             onClick={this.handleSelect.bind(this)} >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-step-area">
                                                    <div> </div>
                                                    <div className="widget-cancle" onClick={() => {
                                                        this.setState({
                                                            isEndorse1: false,
                                                            isEndorse2: true,
                                                        })
                                                    }}>
                                                        下一步
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isEndorse2
                                    ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <div className="icon-margin-left">
                                                    <span>改签机票</span>
                                                    <i className="iconfont iconfont-detail">&#xe64f;</i>
                                                </div>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-selectd-name">
                                                已选：苏三、顾二共2人
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>更改类型：</span>
                                                <RadioGroup onChange={this.onChange} value={this.state.value}>
                                                    <Radio value={1}>改期</Radio>
                                                    <Radio value={2}>签转</Radio>
                                                </RadioGroup>
                                            </div>
                                            <div className="widget-selectd-item widget-display-flex">
                                                <span>起飞日期：</span>
                                                <div className="input-content">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>起飞机场：</span><span>上海浦东国际机场</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>落地机场：</span><span>深圳宝安机场</span>
                                            </div>
                                            {
                                                this.state.value === 2
                                                ? <div className="widget-selectd-item widget-display-flex">
                                                        <span>航空公司：</span>
                                                        <Select defaultValue="航空公司"  style={{ width: 150 }}>
                                                            <Option value="nanchang">南昌昌北国际机场</Option>
                                                            <Option value="shanghai">上海浦东国际机场</Option>
                                                            <Option value="shenzhen">深圳宝安机场</Option>
                                                        </Select>
                                                    </div>
                                                    : ''
                                            }
                                            <div className="widget-step-area">
                                                <div className="widget-next" onClick={() => {
                                                    this.setState({
                                                        isEndorse1: true,
                                                        isEndorse2: false,
                                                    })
                                                }}>上一步</div>
                                                <div className="widget-cancle" onClick={() => {
                                                    this.setState({
                                                        isEndorse2: false,
                                                        isEndorse3: true,
                                                    })
                                                }}>
                                                    下一步
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isEndorse3
                                    ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <div className="icon-margin-left">
                                                    <span>改签机票</span>
                                                    <i className="iconfont iconfont-detail">&#xe64f;</i>
                                                </div>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-selectd-name">
                                                已选：苏三、顾二共2人
                                            </div>
                                            <div className="widget-selectd-name widget-icon-flex">
                                                <span>改签类型：改期</span>
                                                {
                                                    this.state.isDisplay
                                                    ? <div className="icon-box" onClick={() => {this.setState({isDisplay:false})}}>
                                                            <Icon type="up" />
                                                        </div>
                                                        : <div className="icon-box" onClick={() => {this.setState({isDisplay:true})}}>
                                                            <Icon type="down" />
                                                        </div>
                                                }
                                            </div>
                                            {
                                                this.state.isDisplay
                                                ?  <div>
                                                        <div className="widget-selectd-item">
                                                            <span>起飞机场：</span><span>上海浦东国际机场</span>
                                                        </div>
                                                        <div className="widget-selectd-item">
                                                            <span>起飞机场：</span><span>上海浦东国际机场</span>
                                                        </div>
                                                    </div>

                                                    : ''
                                            }
                                            <div className="widget-selectd-flex">
                                                <span>更改类型：</span>
                                                <div className="scroll-y">
                                                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                                                        <Radio style={radioStyle} value={1}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={2}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={3}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={4}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={5}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={6}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                        <Radio style={radioStyle} value={7}>南方航空nx1374 - 09:00    ¥1230</Radio>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                            <div className="widget-step-area">
                                                <div className="widget-next" onClick={() => {
                                                    this.setState({
                                                        isEndorse3: false,
                                                        isEndorse2: true,
                                                    })
                                                }}>上一步</div>
                                                <div className="widget-cancle" onClick={() => {
                                                    this.setState({
                                                        isEndorse3: false,
                                                        isEndorse4: true,
                                                    })
                                                }}>
                                                    下一步
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isEndorse4
                                    ? <div className="widget">
                                            <div className="widget-server-flex">
                                                <div className="icon-margin-left">
                                                    <span>改签机票</span>
                                                </div>
                                                <div className="widget-cancle">
                                                    取消
                                                </div>
                                            </div>
                                            <div className="widget-selectd-name">
                                                已选：苏三、顾二共2人
                                            </div>
                                            <div className="widget-selectd-name">
                                                <div className="widget-selectd-item">
                                                    <span>改签类型：</span><span>改期</span>
                                                </div>
                                                <div className="widget-selectd-item">
                                                    <span>起飞日期：</span><span>2017.09.09</span>
                                                </div>
                                                <div className="widget-selectd-item">
                                                    <span>起落机场：</span><span>上海浦东国际机场 - 深圳宝安机场</span>
                                                </div>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>选择航班：</span><span>南方航空nx1374</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>起飞时间：</span><span>09:00</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>订单金额：</span><span>¥1300</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>需补差价：</span><span>¥130</span>
                                            </div>
                                            <div className="widget-step-area">
                                                <div className="widget-next" onClick={() => {
                                                    this.setState({
                                                        isEndorse3: true,
                                                        isEndorse4: false,
                                                    })
                                                }}>上一步</div>
                                                <div className="widget-cancle" onClick={() => {
                                                    this.setState({
                                                        isEndorse5: true,
                                                        isEndorse4: false,
                                                    })
                                                }}>
                                                    提交申请
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isEndorse5
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-selectd-item">
                                                <span>申请改签，关联订单为：</span><span className="isEndorse-order-number">#FJ37484494949</span>
                                            </div>
                                            <div className="widget-selectd-item">
                                                <span>新增关联订单为：</span><span className="isEndorse-order-number">#883399393</span>
                                            </div>
                                        </div>
                                        : ''
                                }
                            </div>
                            : '加载中...'
                    }
                </div>
                {
                    console.log(datas)
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flight: state.HotelOrderReducer.flight,
});


export default connect(mapStateToProps)(FDetail);

