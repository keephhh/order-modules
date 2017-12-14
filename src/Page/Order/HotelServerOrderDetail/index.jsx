import React, { Component } from 'react';
import {connect} from 'react-redux'
import  Head from '../../SmartComponent/Menu/Menu';
import Navigation from '../../../Component/Navigation/Navigation'

import {  displayHotel } from '../../../Action/OrderAction';

import './index.css';

class FSDetail extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayHotel()(dispatch)
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']

        const navigation = ['订单管理','酒店订单','售后订单','订单详情']

        const {list} = this.props;
        let datas = [];
        list.filter((option,key) => {
            if(this.props  && option) {
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
                                    <span className="flight-detail-header">#9737373773738383844 - 退款完成</span>
                                    <div className="flight-detail-content">
                                        <div className="account">
                                            <div className="account-name">
                                                <label>用户昵称：</label><span>{datas[0].bookName}</span>
                                            </div>
                                            <div className="account-number flight-line">
                                                <label>用户账号：</label><span>steve</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message margintop">
                                            <div className="account-name">
                                                <label>入离时间：</label><span>{datas[0].checkInDate} - {datas[0].checkOutDate}</span>
                                            </div>
                                            <div className="account-name">
                                                <label>入住酒店：</label><span>澳门超级大酒店</span>
                                            </div>
                                            <div className="account-name">
                                                <label>酒店电话：</label><span>(86)-021-12344556</span>
                                            </div>
                                            <div className="account-name">
                                                <label>入住房间：</label><span>高级双人间</span>
                                            </div>
                                            <div className="account-flex-box">
                                                <div className="account-flex-name">
                                                    入住人：
                                                </div>
                                                <div className="account-flex-people">
                                                    <div>Zhanghao</div>
                                                    <div>Jim Stephanie</div>
                                                </div>
                                            </div>
                                            <div className="account-name">
                                                <label>房间数量：</label><span>2间</span>
                                            </div>
                                            <div className="account-name flight-line">
                                                <label>入住人数：</label><span>2成人 2儿童</span>
                                            </div>
                                        </div>
                                        <div className="flight-detail-message flight-line">
                                            <div className="account-name">
                                                <label>申请订单：</label><span>678754468897543357</span>
                                            </div>
                                            <div className="account-flex-box">
                                                <div className="account-flex-name">
                                                    订单金额：
                                                </div>
                                                <div className="account-flex-people">
                                                    <div>￥1234</div>
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
                                                <label>手续费：</label><span>￥123.4 (10%)</span>
                                            </div>
                                            <div className="account-name">
                                                <label>应退金额：</label><span>￥123</span>
                                            </div>
                                            <div className="account-name">
                                                <label>实退金额：</label><span>￥12</span>
                                            </div>
                                            <div className="account-name">
                                                <label>退款账户：</label><span>微信12331</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flight-log-box">
                                        <span className="flight-detail-header">操作日志</span>
                                        <div className="marginleft">
                                            <div className="account-name">
                                                <label>开始时间：</label><span>2017.01.02 14:00</span><span>客服12121</span><span>备注：无</span>
                                            </div>
                                            <div className="account-name">
                                                <label>退款时间：</label><span>2017.01.02 14:00</span><span>客服45621</span><span>备注：无</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="widget">
                                    <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                    <div className="widget-descript">
                                        <span>已经进行退款，退款金额为¥123元</span>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.HotelOrderReducer.list,
});


export default connect(mapStateToProps)(FSDetail);