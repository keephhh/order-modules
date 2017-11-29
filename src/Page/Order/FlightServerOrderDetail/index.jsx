import React, { Component } from 'react';
import {connect} from 'react-redux'
import  Head from '../../SmartComponent/Menu/Menu';
import Navigation from '../../../Component/Navigation/Navigation'

import {  displayFlight } from '../../../Action/OrderAction';

import './index.css';

class FDetail extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayFlight()(dispatch)
    }

    render() {
        const options = ['合作商户','内容编辑','财务对账','CRM','配置']

        const navigation = ['订单管理','机票订单','售后订单','订单详情']

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
        return (
            <div className="order-module">
                <Head focus={'订单管理'} others={options} active={'order'}/>
                <Navigation lines={navigation}/>
                <div>
                    {
                        datas != ''
                            ? <div className="box-flex">
                                <div className="flight-detail-box">
                                    <span className="flight-detail-header">#9737373773738383844 - 已出票</span>
                                    <div className="flight-detail-content">
                                        <div className="account">
                                            <div className="account-name">
                                                <label>用户昵称：</label><span>史蒂夫电饭锅</span>
                                            </div>
                                            <div className="account-number flight-line">
                                                <label>用户账号：</label><span>答对hh</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-name">
                                                <label>联系人：</label><span>苏三</span>
                                            </div>
                                            <div className="account-name">
                                                <label>联系电话：</label><span>130 0000 0000</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message margintop">
                                            <div className="account-name">
                                                <label>航班信息：</label><span>南方航空 CZ3234</span>
                                            </div>
                                            <div className="account-name">
                                                <label>飞机舱位：</label><span>经济舱</span>
                                            </div>
                                            <div className="account-name">
                                                <label>出发时间：</label><span>2017-06-10  周六 10:55</span>
                                            </div>
                                            <div className="account-name">
                                                <label>到达时间：</label><span>2017-06-10  周六 14:55</span>
                                            </div>

                                            <div className="account-name">
                                                <label>飞行时长：</label><span>4小时</span>
                                            </div>

                                            <div className="account-name">
                                                <label>出发机场：</label><span>上海虹桥机场T2</span>
                                            </div>
                                            <div className="account-name">
                                                <label>到达机场：</label><span>深圳宝安机场T3</span>
                                            </div>
                                            <div className="account-name">
                                                <label>其他备注：</label><span>经停一次 广州白云机场</span>
                                            </div>

                                        </div>
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
                                        </div>
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
                                        </div>
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
                                            <div className="account-name">
                                                <label>支付单号：</label><span>98765456784567890543568</span>
                                            </div>
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
                                <div className="widget">
                                    <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                    <div className="widget-descript">
                                        <span>客户申请售后服务，目前财务已经操作：</span>
                                        <div className="input_box">
                                            <span>￥</span><input type="text" placeholder="退款金额"/>
                                        </div>
                                        <div className="area_box">
                                            <textarea name="" id="" cols="30" rows="10" placeholder="若有需要说明的请填写备注"></textarea>
                                        </div>
                                        <button>确认操作</button>
                                    </div>
                                </div>
                            </div>
                            : '加载中...'
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flight: state.HotelOrderReducer.flight,
});


export default connect(mapStateToProps)(FDetail);

