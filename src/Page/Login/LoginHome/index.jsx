import React, { Component } from 'react';
import HeaderMenu from '../../../Component/Menu/menu'
import { browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {showinit} from "../../../Action/AppAction"
import './style.css'


class LoginHome extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(showinit())
    }
    changeModule (e) {
        if (e.item.props.children == '订单管理') {
            browserHistory.push('/')
        }
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']
        return (
            <div className="login-home">
                <div className="login-home-header">
                    <div className="login-home-img">
                        <img src={require("../../../images/logo.png")} alt=""/>
                    </div>
                    <div className="login-module">
                        <HeaderMenu focus={'订单管理'}
                                    others={options}
                                    active={'order'}
                                    changeModule={this.changeModule.bind(this)}
                        />
                    </div>
                </div>
                <div className="login-home-body">
                    <div className="login-home-display">首页</div>
                    <div className="login-home-area">
                        <span className="login-home-title">欢迎您！</span>
                        <div className="login-user">
                            <div className="login-user-avatar">
                                <img src="http://www.ld12.com/upimg358/allimg/20160630/0811446121497071.jpg" alt=""/>
                            </div>
                            <div className="login-user-message">
                                <span className="login-user-name">keephhh</span>
                                <div className="login-user-item">
                                    <div className="user-item-dep">
                                        部门：<span>销售部</span>
                                    </div>
                                    <div className="user-item-dep">
                                        权限角色：<span>销售总监</span>
                                    </div>
                                    <div className="user-item-dep">
                                        上次登出时间：<span>2017-11-21 21:39:12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login-func">
                            <span className="login-func-label">
                                我的常用功能
                            </span>
                            <div className="login-func-type">
                                <div className="login-func-item">
                                    <span>CRM</span>
                                    <span>代理系统</span>

                                </div>
                                <div className="login-func-item">
                                    <span>CRM</span>
                                    <span>代理系统</span>
                                </div>
                                <div className="login-func-item">
                                    <span>CRM</span>
                                    <span>代理系统</span>
                                </div>
                                <div className="login-func-item">
                                    <span>CRM</span>
                                    <span>代理系统</span>
                                </div>
                            </div>
                            <span className="login-func-label">
                                系统更新记录
                            </span>

                            <div className="login-update-record">
                                <div className="login-update-item">
                                    <label className="login-update-time">2017-11-21</label>
                                    <span className="login-update-content">新增额度恢复功能，功能路径：<span>CRM-额度恢复</span>， 有需求的同事请联</span>
                                </div>
                                <div className="login-update-item">
                                    <label className="login-update-time">2017-11-21</label>
                                    <span className="login-update-content">新增额度恢复功能，功能路径：<span>CRM-额度恢复</span>， 有需求的同事请联</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});
export default connect(mapStateToProps)(LoginHome);