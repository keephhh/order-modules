import React, { Component } from 'react';
import Menu from '../../../SmartComponent/Menu/Menu';
import Navigation from '../../../../Component/Navigation/Navigation'
import ClientList from './SubPage/ClientList'
import './index.css'
import { Select, Icon } from 'antd';
const Option = Select.Option;


class Client extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isAdd: false,
            isSearch: false,
        }
    }
    handleAdd () {
        this.setState({
            isAdd: true,
        })
    }
    handleSearch () {
        this.setState({
            isSearch: true,
        })
    }
    handleIsCancle () {
        this.setState({
            isAdd: false,
        })
    }
    handleBackOption () {
        this.setState({
            isSearch: false,
        })
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置'];
        const navigation = ['CRM','客户信息']
        const buttonType = {
            excle: 'excle',
            add: 'add',
            search: 'search',
            export: 'export',
        }
        const types1 = ['· 全部用户', '· 今日新增', '· 未分配', '· 已申请额度', '· 已借款', '· 已消费', '·有转码', '· 即将出行'];
        const types2 = ['· 消费50万元以上', '· 消费10-50万', '· 消费10万以下', '· 无消费记录'];
        const types3 = ['· 累计转码200万以上', '· 累计转码100-200万', '· 累计转码50-100万', '· 累计转码10-50万', '· 累计转码10万以下', '· 无转码记录'];
        return (
            <div className="client">
                {
                    this.state.isAdd
                    ? <div className="mask-page"> </div>
                        : ''
                }
                {
                    this.state.isAdd
                    ? <div className="fixed-add">
                            <div className="fixed-add-header">
                                <span className="fixed-add-item">新增用户</span>
                                <label>（通过手动方式新增的客户，需要在App上登录激活后，才能开启账)</label>
                            </div>
                            <div className="fixed-add-content">
                                <div className="fixed-flex-box">
                                    <span className="must">*</span>
                                    <label>用户真实姓名：</label>
                                    <div className="fixed-flex-input">
                                        <input className="noneBorder" type="text"/>
                                    </div>
                                </div>
                                <div className="fixed-flex-box">
                                    <span className="must">*</span>
                                    <label>手机号码：</label>
                                    <div className="fixed-flex-port">
                                        <div className="ant-content">
                                            <Select defaultValue="+0987" style={{ width: 120 }}>
                                                <Option value="jack">+0791</Option>
                                                <Option value="lucy">+0923</Option>
                                                <Option value="Yiminghe">+0977</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="fixed-flex-number">
                                        <input className="noneBorder" type="text"/>
                                    </div>
                                </div>
                                <div className="fixed-flex-box">
                                    <span className="must">*</span>
                                    <label>身份证号：</label>
                                    <div className="fixed-flex-input">
                                        <input className="noneBorder" type="text"/>
                                    </div>
                                </div>
                                <div className="fixed-flex-box">
                                    <span className="must">*</span>
                                    <label>渠道：</label>
                                    <div className="fixed-flex-input">
                                        <Select defaultValue="朋友渠道" style={{ width: 120 }}>
                                            <Option value="jack">网上渠道</Option>
                                            <Option value="lucy">商家渠道</Option>
                                            <Option value="Yiminghe">报纸杂志</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="fixed-flex-box">
                                    <label>昵称：</label>
                                    <div className="fixed-flex-input">
                                        <input className="noneBorder" type="text" placeholder="若不填，则默认为手机号码"/>
                                    </div>
                                </div>
                                <div className="fixed-flex-box">
                                    <label>账号 (用户ID)：</label>
                                    <div className="fixed-flex-input">
                                        <input className="noneBorder" type="text" placeholder="若不填，则默认自动生成"/>
                                    </div>
                                </div>

                                <div className="fixed-button-area">
                                    <div className="fixed-button-prevent">
                                        保存
                                    </div>
                                    <div className="fixed-button-cancle" onClick={this.handleIsCancle.bind(this)}>
                                        取消
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''
                }
                <Menu focus={'订单管理'}
                      others={options}
                      active={'order'}
                />
                <Navigation
                    lines={navigation}
                    ebutton={buttonType}
                    handleAdd={this.handleAdd.bind(this)}
                    handleSearch={this.handleSearch.bind(this)}
                />
                {
                    !this.state.isSearch
                    ? <div className="client-type">
                            <div className="client-type-title">
                                快速分类
                            </div>
                            <div className="client-option">
                                <div className="option-line">
                                    {
                                        types1.map((type, i) => <span key={i}>{type}</span>)
                                    }
                                </div>
                                <div className="option-line">
                                    {
                                        types2.map((type, i) => <span key={i}>{type}</span>)
                                    }
                                </div>
                                <div className="option-line">
                                    {
                                        types3.map((type, i) => <span key={i}>{type}</span>)
                                    }
                                </div>
                            </div>
                        </div>
                        : ''
                }
                {
                    this.state.isSearch
                    ?   <div className="client-type">
                            <div className="client-type-title">
                                <div className="back-option" onClick={this.handleBackOption.bind(this)}>
                                    <Icon type="left" />
                                    返回快速分类
                                </div>
                            </div>
                            <div className="isSearch-content">
                                <div className="isSearch-cut-left">
                                    <div className="isSearch-item">
                                        <span>用户真实姓名：</span>
                                        <div className="input-collection">
                                            <input className="message-input" type="text" placeholder="请输入用户姓名关键字"/>
                                        </div>
                                    </div>
                                    <div className="isSearch-item">
                                        <span>代理：</span>
                                        <Select defaultValue='请选择指定代理' style={{ width: 150, color: '#C3C3C3'}}>
                                            <Option value="boy">代理1</Option>
                                            <Option value="gril">代理2</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="isSearch-cut-left">
                                    <div className="isSearch-item">
                                        <span>用户手机号码：</span>
                                        <div className="input-collection">
                                            <input className="message-input" type="text" placeholder="请输入手机号码"/>
                                        </div>
                                    </div>
                                    <div className="isSearch-item">
                                        <span>销售经理：</span>
                                        <Select defaultValue='请选择指定销售经理' style={{ width: 150, color: '#C3C3C3'}}>
                                            <Option value="boy">销售经理1</Option>
                                            <Option value="gril">销售经理2</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="isSearch-cut-mid">
                                    <span>累计转码金额 (￥)：</span>
                                    <div className="isSearch-input">
                                        <input type="text"/>
                                    </div>
                                    <div className="line-input">
                                        --
                                    </div>
                                    <div className="isSearch-input">
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="isSearch-cut-right">
                                    <div className="isSearch-button-search">查找</div>
                                    <div className="isSearch-button-cancle">清除</div>
                                </div>
                            </div>
                        </div>
                        : ''
                }
                <ClientList/>
            </div>
        );
    }
}

export default Client;