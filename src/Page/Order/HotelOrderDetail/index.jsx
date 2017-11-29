import React, { Component } from 'react';
import {connect} from 'react-redux'
import  Head from '../../SmartComponent/Menu/Menu';
import Navigation from '../../../Component/Navigation/Navigation'

import {  displayHotel } from '../../../Action/OrderAction';

import './index.css';

class FDetail extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayHotel()(dispatch)
    }

    render() {
        const options = ['合作商户','内容编辑','财务对账','CRM','配置']

        const navigation = ['订单管理','酒店订单','销售订单','订单详情']

        const {list} = this.props;
        let datas = [];
        list.filter((option,key) => {
            console.log(option)
            if(option !== '') {
                return option.hotelOrderId == this.props.params.detail.substring(1)
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
                                    <span className="flight-detail-header">111 - 已取消</span>
                                    <div className="flight-detail-content">
                                        <div className="account">
                                            <div className="account-name">
                                                <label>用户昵称：</label><span>{ datas[0].bookName }</span>
                                            </div>
                                            <div className="account-number flight-line">
                                                <label>用户账号：</label><span>{ datas[0].userId }</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message margintop">
                                            <div className="account-name">
                                                <label>入离时间：</label><span>{ datas[0].checkInDate }</span> - <span>{ datas[0].checkOutDate }</span>
                                            </div>
                                            <div className="account-name">
                                                <label>入住酒店：</label><span>{ datas[0].hotelName }</span>
                                            </div>
                                            <div className="account-name">
                                                <label>酒店电话：</label><span>{ datas[0].userId }</span>
                                            </div>
                                            <div className="account-name">
                                                <label>入住房间：</label><span>{ datas[0].roomName}</span>
                                            </div>
                                            <div className="account-flex-box">
                                                <div className="account-flex-name">
                                                    入住人：
                                                </div>
                                                <div className="account-flex-people">
                                                    {
                                                        datas[0].guestsName.map((name, key) => <div key={key}>{name}</div>)
                                                    }
                                                </div>
                                            </div>
                                            <div className="account-name">
                                                <label>房间数量：</label><span>2间</span>
                                            </div>
                                            <div className="account-name flight-line">
                                                <label>入住人数：</label><span>{ datas[0].remark.adults.length}成人  { datas[0].remark.children.length}小孩</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-flex-box">
                                                <div className="account-flex-name">
                                                    订单金额：
                                                </div>
                                                <div className="account-flex-people">
                                                    <div>￥{ datas[0].orderAmount}</div>
                                                    <div className="account-flex-extra">
                                                        <div className="account-flex-des">
                                                            <label>2017.01.01  双早：</label><span>￥320*1间</span>
                                                        </div>
                                                        <div className="account-flex-des">
                                                            <label>2017.01.01  双早：</label><span>￥320*1间</span>
                                                        </div>
                                                        <div className="account-flex-des">
                                                            <label>税和服务费：</label><span>￥80</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="account-name">
                                                <label>支付方式：</label><span>信用账户245684342</span>
                                            </div>
                                            <div className="account-name">
                                                <label>支付单号：</label><span>03799047363628245684342</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-name">
                                                <label>手机号码：</label><span>{ datas[0].bookPhone}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>支付邮箱：</label><span>test@luckytrip.com</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-name">
                                                <label>到店时间：</label><span>{datas[0].remark.arrivalTime}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>入住偏好：</label><span>尽量安排1张特大床  尽量安排安静的房间  尽量安排高层  无烟房</span>
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
                                                <label>备注说明：</label><span>无</span>
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
                                        <span>客人尚未支付，订单将于01.01 14:00关闭</span>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }
                    {
                        console.log(this.props.params.detail.substring(1))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.HotelOrderReducer.list,
});


export default connect(mapStateToProps)(FDetail);

