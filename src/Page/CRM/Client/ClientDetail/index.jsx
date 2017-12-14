import React, { Component } from 'react';
import  Menu from '../../../SmartComponent/Menu/Menu'
import Navigation from '../../../../Component/Navigation/Navigation'
import ClientMesType from './SubPage/ClientMesType'
import './index.css'


class ClientDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            current: 'mail',
            editShowFlag: true,
            cancelShowFlag: false,
            delete: false,
            labelType: ['大客户','活跃','低频','单身'],
        }
    }
    handleSearch (e) {
        this.setState({
            current: e.key,
        });
    }

    handleEdit () {
        this.setState({
            editShowFlag: false,
            cancelShowFlag: true,
            delete: true,
        });
    }


    handleDelete (e) {
        var currentLabelType = this.state.labelType
        currentLabelType.splice(e,1)
        this.setState({
            labelType: currentLabelType ,
        });
    }
    handleCancel () {
        this.setState({
            editShowFlag: true,
            cancelShowFlag: false,
            delete: false,
            labelType: ['大客户','活跃','低频','单身'],
        });
    }
    handlePrevent () {
        this.setState({
            editShowFlag: true,
            cancelShowFlag: false,
            delete: false,
        });
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置'];
        const navigation = ['CRM','客户信息','客户详情'];
        const buttonType = {
            export: 'export',
        }
        return (
            <div className="client-detail">
                <Menu focus={'订单管理'}
                      others={options}
                      active={'order'}/>
                <Navigation
                    lines={navigation}
                    ebutton={buttonType}
                />
                <div className="flex-content-box">
                    <div className="flex-content-left">
                        <div className="client-baseMessage">
                            <div className="client-flex-box">
                                <div className="client-flex-top-box">
                                    <div className="client-flex-top-avatar">
                                        <div><img src="http://www.ld12.com/upimg358/allimg/20160630/0811446121497071.jpg" alt=""/></div>
                                        <div className="client-content-flex">
                                            <div className="content-item-name">黑色星期六</div>
                                            <div className="content-item-id">
                                                <span>用户ID：</span><span>v01100v111</span>
                                            </div>
                                            <div className="content-item-Name">
                                                <span>昵称：</span><span>小青年</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-flex-top-item">
                                        <span>信用账户</span>
                                        <span>￥111,122,345.00</span>
                                        <span>500,000,000.00</span>
                                    </div>
                                    <div className="client-flex-top-item border-box">
                                        <span>现金账户</span>
                                        <span>￥122,345.00</span>
                                    </div>
                                    <div className="client-flex-top-item">
                                        <span>积分账户</span>
                                        <span>￥12,345</span>
                                    </div>
                                </div>
                                <div className="client-flex-bottom-box">
                                    <div><span className="last-item">最近登录App：</span><span className="last-time">2017-10-25 15:54:12</span></div>
                                    <div><span className="last-item">最近消费：</span><span className="last-time">2017-10-25 15:54:12</span><label>购买机票</label></div>
                                    <div><span className="last-item">最近沟通：</span><span className="last-time">2017-10-21 12:14:12</span><label>忙碌中</label></div>
                                    <div><span className="last-item">最近账户变动：</span><span className="last-time">2017-10-21 12:14:12</span><label>离场存码</label></div>
                                </div>
                            </div>
                        </div>
                        <div className="client-baseMessage minHeight">
                            <ClientMesType
                                current={this.state.current}
                                handleSearch={this.handleSearch.bind(this)}
                            />
                            {this.props.children}
                        </div>
                    </div>
                    <div className="flex-content-right">
                        <div className="label-title">
                            <span>用户标签</span>
                            <div className="edit">
                                {
                                    this.state.editShowFlag
                                        ? <div className="write" onClick={this.handleEdit.bind(this)}>编辑</div>
                                        : ''
                                }
                                {
                                    this.state.cancelShowFlag
                                        ? <div className="write" onClick={this.handleCancel.bind(this)}>取消</div>
                                        : ''
                                }
                                {
                                    this.state.cancelShowFlag
                                        ? <div className="cancel" onClick={this.handlePrevent.bind(this)}>保存</div>
                                        : ''
                                }
                            </div>
                        </div>
                        <div className="label-display">
                            {
                                this.state.labelType.map((label, i) => <div className="label-layout" key={i}>
                                                                <div className="label-item">
                                                                    {label}
                                                                    {
                                                                        this.state.delete
                                                                        ? <span className="delete-item" onClick={() =>{this.handleDelete(i)}}>+</span>
                                                                        : ''
                                                                    }
                                                                </div>
                                                            </div>)
                            }
                            {
                                this.state.delete
                                    ? <div className="label-layout"><div className="label-add"><span className="add-item">+</span>添加Tag</div></div>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
                {
                    console.log(this.state.labelType)
                }
            </div>
        );
    }
}


export default ClientDetail;