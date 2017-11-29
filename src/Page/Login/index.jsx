import React, { Component } from 'react';
import { browserHistory} from 'react-router'
import {showinit} from "../../Action/AppAction"
import {connect} from 'react-redux'
import './index.css'


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelect: false
        }
    }

    handleLogin () {
        browserHistory.push('/loginHome')
    }
    handleSelect () {
        this.setState({
            isSelect: !this.state.isSelect
        })
    }
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(showinit())
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="login-header">
                        <img src={require("../../images/logo.png")} alt=""/>
                    </div>
                    <div className="login-flex">
                        <div className="login-label">
                            用户名：
                        </div>
                        <div className="login-item">
                            <input type="text" className="login-input"/>
                        </div>
                    </div>
                    <div className="login-flex">
                        <div className="login-label">
                            密码：
                        </div>
                        <div className="login-item">
                            <input type="password" className="login-input"/>
                        </div>
                    </div>
                    <div className="login-flex login-option">
                        <div></div>
                        <div className="login-option-area">
                            <div className="login-option-item flex-select">
                                <span className={(this.state.isSelect ? "login-option-selectd" : "login-option-select")}
                                      onClick={this.handleSelect.bind(this)}></span>
                                自动登录
                            </div>
                            <div className="login-option-item login-color">忘记密码</div>
                        </div>
                    </div>
                    <div className="login-button-area">
                        <button className="login-button" onClick={this.handleLogin.bind(this)}>登录</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});
export default connect(mapStateToProps)(Login);