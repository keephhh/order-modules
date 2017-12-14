import React, { Component } from 'react';
import {connect} from 'react-redux'
import  Head from '../../SmartComponent/Menu/Menu';
import Navigation from '../../../Component/Navigation/Navigation'

import {  displayHotel } from '../../../Action/OrderAction';
import { Radio, Select, DatePicker, Checkbox, Icon} from 'antd';

import './index.css';

const RadioGroup = Radio.Group;
const Option = Select.Option;

class FDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '1',
            account: '',
            requirement: '',
            isDisplay: true,
            isWaitPay: false,
            isCancelPay: false,
            isOpenPay: false,
            isWaitSure: false,
            isSuccessPay: false,
            isFinish: false,
            isServer1:false,
            isbackMoney: false,
            isAdd1: false,
            isAdd2: false,
            isAdd3: false,
            isAdd4: false,
            isAdd5: false,
            isAdd6: false,
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        displayHotel()(dispatch)
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    handleSure () {
        console.log(this.state.value)
        if(this.state.value === 1) {
            this.setState({
                isSuccessPay: true,
                isWaitSure: true,
            });
        }
        if(this.state.value === 2) {
            this.setState({
                isServer1: true,
                isWaitSure: true,
            });
        }
    }
    handleOption (value) {
        this.setState({
            requirement: value
        })
    }

    handleChange (value) {
        this.setState({
            account: value
        })
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置'];

        const navigation = ['订单管理','酒店订单','销售订单','订单详情'];

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        const {list} = this.props;
        let datas = [];
        list.filter((option,key) => {
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
                                {
                                    this.state.isWaitPay
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>客人尚未支付，订单将于01.01 14:00关闭</span>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isCancelPay
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>用户主动取消了订单</span>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {

                                    this.state.isOpenPay
                                        ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>用户支付超时，关闭订单</span>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    !this.state.isWaitSure
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>和酒店电话确认是否有房后，酒店回复：</span>
                                                <div>
                                                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                                                        <Radio value={1}>有房</Radio>
                                                        <Radio value={2}>无房</Radio>
                                                    </RadioGroup>
                                                </div>
                                                <div className="area_box">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder="若有需要说明的请填写备注"></textarea>
                                                </div>
                                                <button onClick={this.handleSure.bind(this)}>确认操作</button>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isSuccessPay
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>酒店已经预订成功，客人将于02.01 入住若用户要求取消，与酒店确认后继续操作</span>
                                                <button style={{marginTop: 10, marginBottom: 10}} onClick={() => {
                                                    this.setState({
                                                        isSuccessPay: false,
                                                        isServer1: true,
                                                    })
                                                }}>申请售后</button>
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
                                            <div className="widget-selectd-item">
                                                <span>订单金额：</span><span>¥1200</span>
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
                                            <div className="fixed-create-footer">
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isServer1: false,
                                                        isbackMoney: true,
                                                    })
                                                }}>提交申请</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isbackMoney
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>申请售后，关联订单为：</span>
                                                <div className="widget-descript_order">#SH37484494949</div>
                                                <div className="flag-create" style={{marginBottom: 10}}>
                                                    是否需要为客人创建新订单
                                                </div>
                                                <button onClick={() => {
                                                    this.setState({
                                                        isbackMoney: false,
                                                        isAdd1: true,
                                                    })
                                                }}>创建订单</button>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isAdd1
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>创建新订单</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd1: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-flex">
                                                    <span>供应商：</span>
                                                    <Select defaultValue='供应商' style={{ width: 100 }}>
                                                        <Option value="供应商1">供应商1</Option>
                                                        <Option value="供应商2">供应商2</Option>
                                                        <Option value="供应商3">供应商3</Option>
                                                    </Select>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>预订酒店：</span>
                                                    <div className="fixed-create-flex-item">
                                                        <input type="text" placeholder="威尼斯人大酒店"/>
                                                    </div>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>入离时间：</span>
                                                    <DatePicker size='default' style={{ width: 60 }} />
                                                    <div className="date-line"> </div>
                                                    <DatePicker size='default' style={{ width: 60 }} />
                                                </div>
                                            </div>
                                            <div className="fixed-create-footer">
                                                <div className=""> </div>
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isAdd1: false,
                                                        isAdd2: true,
                                                    })
                                                }}>下一步</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isAdd2
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>创建新订单</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd2: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-flex">
                                                    <span>供应商：</span>
                                                    <label>供应商</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>预订酒店：</span>
                                                    <label>威尼斯人大酒店</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>入离时间：</span>
                                                    <label>2017.09.03</label> - <label>2017.09.04</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>房间：</span>
                                                    <Select defaultValue='双人房' style={{ width: 100 }}>
                                                        <Option value="单人大床房">单人大床房</Option>
                                                        <Option value="标准双人间">标准双人间</Option>
                                                        <Option value="豪华商务房">豪华商务房</Option>
                                                    </Select>
                                                    <Select defaultValue='10' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                                        <Option value="1">1</Option>
                                                        <Option value="2">2</Option>
                                                        <Option value="3">3</Option>
                                                    </Select>
                                                    <label>间</label>
                                                </div>
                                            </div>
                                            <div className="fixed-create-footer">
                                                <div> </div>
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isAdd2: false,
                                                        isAdd3: true,
                                                    })
                                                }}>下一步</div>
                                            </div>
                                        </div>
                                        : ''

                                }
                                {
                                    this.state.isAdd3
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>创建新订单</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd3: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-flex">
                                                    <span>供应商：</span>
                                                    <label>供应商</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>预订酒店：</span>
                                                    <label>威尼斯人大酒店</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>入离时间：</span>
                                                    <label>2017.09.03</label> - <label>2017.09.04</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>房间：</span>
                                                    <label>双人房 × 10 间</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>用户ID：</span>
                                                    <div className="fixed-create-flex-item">
                                                        <input type="text" placeholder="请输入UID"/>
                                                    </div>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>入住偏好：</span>
                                                    <Select defaultValue='无要求' style={{ width: 100 }} onChange={this.handleOption.bind(this)}>
                                                        <Option value="">无要求</Option>
                                                        <Option value="有要求">有要求</Option>
                                                    </Select>
                                                </div>
                                                {
                                                    this.state.requirement !== ''
                                                        ? <div className="fixed-create-flex" style={{ marginLeft: 55 }}>
                                                            <Checkbox >尽量安排高层</Checkbox>
                                                            <Checkbox >无烟房</Checkbox>
                                                            <Checkbox >房间安静</Checkbox>
                                                        </div>
                                                        : ''
                                                }
                                            </div>
                                            <div className="fixed-create-footer">
                                                <div className="fixed-create-button-last" onClick={() => {
                                                    this.setState({
                                                        isAdd3: false,
                                                        isAdd2: true,
                                                    })
                                                }}>上一步</div>
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isAdd3: false,
                                                        isAdd4: true,
                                                    })
                                                }}>下一步</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isAdd4
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>创建新订单</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd4: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-item-line">
                                                    <div className="fixed-create-flex">
                                                        <span>酒店信息：</span>
                                                        <label>威尼斯人大酒店 - 双人房*2间*1晚</label>
                                                    </div>
                                                    <div className="fixed-create-flex">
                                                        <span>入离时间：</span>
                                                        <label>2017.09.03</label> - <label>2017.09.04</label>
                                                    </div>
                                                </div>
                                                <div className="fixed-create-people">
                                                    <div className="fixed-create-flex">
                                                        <span>用户ID：</span>
                                                        <label>bkahsugs</label>
                                                    </div>
                                                    <div className="fixed-create-add-people">
                                                        <div className="fixed-create-flex">
                                                            <span>房间1：</span>
                                                            <div className="fixed-create-flex-item2">
                                                                <input type="text" placeholder="姓"/>/<input type="text" placeholder="姓"/>
                                                            </div>
                                                        </div>
                                                        <div className="fixed-create-flex" style={{ marginLeft: 55 }}>
                                                            <Select defaultValue='2' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                                                <Option value="1">1</Option>
                                                                <Option value="2">2</Option>
                                                                <Option value="3">3</Option>
                                                            </Select>
                                                            <span>成人</span>
                                                            <Select defaultValue='0' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                                                <Option value="1">1</Option>
                                                                <Option value="2">2</Option>
                                                                <Option value="3">3</Option>
                                                            </Select>
                                                            <span>儿童</span>
                                                        </div>
                                                    </div>
                                                    <div className="fixed-create-add-people">
                                                        <div className="fixed-create-flex">
                                                            <span>房间2：</span>
                                                            <div className="fixed-create-flex-item2">
                                                                <input type="text" placeholder="姓"/>/<input type="text" placeholder="姓"/>
                                                            </div>
                                                        </div>
                                                        <div className="fixed-create-flex" style={{ marginLeft: 55 }}>
                                                            <Select defaultValue='2' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                                                <Option value="1">1</Option>
                                                                <Option value="2">2</Option>
                                                                <Option value="3">3</Option>
                                                            </Select>
                                                            <span>成人</span>
                                                            <Select defaultValue='0' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                                                <Option value="1">1</Option>
                                                                <Option value="2">2</Option>
                                                                <Option value="3">3</Option>
                                                            </Select>
                                                            <span>儿童</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="fixed-create-footer">
                                                <div className="fixed-create-button-last" onClick={() => {
                                                    this.setState({
                                                        isAdd4: false,
                                                        isAdd3: true,
                                                    })
                                                }}>上一步</div>
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isAdd4: false,
                                                        isAdd5: true,
                                                    })
                                                }}>下一步</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isAdd5
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>新增用户</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd5: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-item-line">
                                                    <div className="fixed-create-flex">
                                                        <span>酒店信息：</span>
                                                        <label className="margin-right">威尼斯人大酒店 - 双人房*2间*1晚</label>
                                                        {
                                                            this.state.isDisplay
                                                                ? <div className="icon-box" onClick={() => {this.setState({isDisplay:false})}}>
                                                                    <Icon type="down" />
                                                                </div>
                                                                : <div className="icon-box" onClick={() => {this.setState({isDisplay:true})}}>
                                                                    <Icon type="up" />
                                                                </div>
                                                        }
                                                    </div>
                                                    <div className="fixed-create-flex">
                                                        <span>入离时间：</span>
                                                        <label>2017.09.03</label> - <label>2017.09.04</label>
                                                    </div>
                                                    {
                                                        this.state.isDisplay
                                                            ? ''
                                                            : <div>
                                                                <div className="fixed-create-add-people">
                                                                    <div className="fixed-create-flex">
                                                                        <span>房间1：</span>
                                                                        <span>Lin / Zhanghao</span>
                                                                    </div>
                                                                    <div className="fixed-create-flex" style={{ marginLeft: 65 }}>
                                                                        <span>成人*2 儿童*2</span>
                                                                    </div>
                                                                </div>
                                                                <div className="fixed-create-flex">
                                                                    <span>入住偏好：</span>
                                                                    <span>尽量安排1张特大床  尽量安排安静的房间 </span>
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>用户ID：</span>
                                                    <label>bkahsugs</label>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>联系人：</span>
                                                    <div className="fixed-create-flex-item">
                                                        <input type="text" placeholder="联系人姓名"/>
                                                    </div>
                                                </div>
                                                <div className="fixed-create-flex">
                                                    <span>联系电话：</span>
                                                    <div className="fixed-create-flex-iphone1">
                                                        <input type="text" placeholder="区号"/>
                                                    </div>
                                                    <div className="iphone-line"> </div>
                                                    <div className="fixed-create-flex-iphone2">
                                                        <input type="text" placeholder="区号"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fixed-create-footer">
                                                <div className="fixed-create-button-last" onClick={() => {
                                                    this.setState({
                                                        isAdd5: false,
                                                        isAdd4: true,
                                                    })
                                                }}>上一步</div>
                                                <div className="fixed-create-button-next" onClick={() => {
                                                    this.setState({
                                                        isAdd5: false,
                                                        isAdd6: true,
                                                    })
                                                }}>下一步</div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isAdd6
                                        ? <div className="widget">
                                            <div className="fixed-create-header">
                                                <span>新增用户</span>
                                                <div onClick={() => {
                                                    this.setState({
                                                        mask: false,
                                                        isAdd6: false,
                                                    })
                                                }}>取消</div>
                                            </div>
                                            <div className="fixed-create-content">
                                                <div className="fixed-create-item-line">
                                                    <div className="fixed-create-flex">
                                                        <span>酒店信息：</span>
                                                        <label className="margin-right">威尼斯人大酒店 - 双人房*2间*1晚</label>
                                                        {
                                                            this.state.isDisplay
                                                                ? <div className="icon-box" onClick={() => {this.setState({isDisplay:false})}}>
                                                                    <Icon type="down" />
                                                                </div>
                                                                : <div className="icon-box" onClick={() => {this.setState({isDisplay:true})}}>
                                                                    <Icon type="up" />
                                                                </div>
                                                        }
                                                    </div>
                                                    <div className="fixed-create-flex">
                                                        <span>入离时间：</span>
                                                        <label>2017.09.03</label> - <label>2017.09.04</label>
                                                    </div>
                                                    {
                                                        this.state.isDisplay
                                                            ? ''
                                                            : <div>
                                                                <div className="fixed-create-add-people">
                                                                    <div className="fixed-create-flex">
                                                                        <span>房间1：</span>
                                                                        <span>Lin / Zhanghao</span>
                                                                    </div>
                                                                    <div className="fixed-create-flex" style={{ marginLeft: 65 }}>
                                                                        <span>成人*2 儿童*2</span>
                                                                    </div>
                                                                </div>
                                                                <div className="fixed-create-flex">
                                                                    <span>入住偏好：</span>
                                                                    <span>尽量安排1张特大床  尽量安排安静的房间 </span>
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                                <div className="fixed-create-item-line">
                                                    <div className="fixed-create-flex">
                                                        <span>用户ID：</span>
                                                        <label>bkahsugs</label>
                                                    </div>
                                                    <div className="fixed-create-flex">
                                                        <span>联系人：</span>
                                                        <div className="label-collection">
                                                            <label>孙丹菲</label><label>+86 12332112345</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-pay-detail">
                                                    <div className="pay-detail-item">
                                                        <span>房费：</span><span>￥2345</span>
                                                    </div>
                                                    <div className="pay-detail-item">
                                                        <span>税费服务费：</span><span>￥100</span>
                                                    </div>
                                                    <div className="pay-detail-item">
                                                        <span>总费用：</span><span>￥2445</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                }
                                {
                                    this.state.isFinish
                                    ? <div className="widget">
                                            <span className="flight-detail-header"><label>客服1234</label>跟进操作</span>
                                            <div className="widget-descript">
                                                <span>客人已经完成入住</span>
                                            </div>
                                        </div>
                                        : ''
                                }

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


export default connect(mapStateToProps)(FDetail);

