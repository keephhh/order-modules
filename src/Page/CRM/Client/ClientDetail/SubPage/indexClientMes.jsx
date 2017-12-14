import React, { Component } from 'react';
import { Select, Checkbox } from 'antd';
import './style.css'

const Option = Select.Option;


class IndexClient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            status: 'index',
        }
    }

    handleClick (data) {
        switch (data) {
            case 'index':
                this.setState({
                    status: data
                })
                break;
            case 'money':
                this.setState({
                    status: data
                })
                break;
            case 'offer':
                this.setState({
                    status: data
                })
                break;
            case 'home':
                this.setState({
                    status: data
                })
                break;
            case 'adress':
                this.setState({
                    status: data
                })
                break;
        }
    }

    render() {
        return (
            <div className="index-client-mes">
                <div className="navigation-mes">
                    <div className="span">
                        <span className={(this.state.status === "index" ? "isFilterActive" : "")} onClick={() => {this.handleClick("index")}}>基本信息</span>
                        <span className={(this.state.status === "money" ? "isFilterActive" : "")} onClick={() => {this.handleClick("money")}}>银行财务</span>
                        <span className={(this.state.status === "offer" ? "isFilterActive" : "")} onClick={() => {this.handleClick("offer")}}>工作单位</span>
                        <span className={(this.state.status === "home" ? "isFilterActive" : "")} onClick={() => {this.handleClick("home")}}>亲友信息</span>
                        <span className={(this.state.status === "adress" ? "isFilterActive" : "")} onClick={() => {this.handleClick("adress")}}>房产、住址</span>
                    </div>
                    <div className="write">编辑</div>
                </div>
                <div className="message-display">
                    <div className="message-display-title">
                        基本信息 <label>(以下带*的项目是申请信用额度必填项目)</label>
                    </div>
                    {
                        this.state.status === "index"
                        ? <div className="clear-box">
                                <div className="input-item-float">
                                    <span>代理人：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>售前：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>渠道：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>账号状态：</span>
                                    <Select defaultValue='未激活' style={{ width: 150 }}>
                                        <Option value="正常">正常</Option>
                                        <Option value="禁用">禁用</Option>
                                        <Option value="黑名单">黑名单</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>注册方式：</span>
                                    <Select defaultValue='后台创建' style={{ width: 150 }}>
                                        <Option value="boy">App-iOS注册</Option>
                                        <Option value="gril">App-Android注册</Option>
                                        <Option value="代理H5页注册">代理H5页注册</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>注册时间：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>注册手机号：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>

                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>年龄：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>性别：</span>
                                    <Select defaultValue='男' style={{ width: 150 }}>
                                        <Option value="boy">男</Option>
                                        <Option value="gril">女</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>发证机关：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>有效期(至)：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>身份证号码：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>户籍地址：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>籍贯：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>常住地：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>电子邮箱：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>QQ号：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>微信号：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>子女数目：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>婚姻状况：</span>
                                    <Select defaultValue='未婚' style={{ width: 150 }}>
                                        <Option value="yes">未婚</Option>
                                        <Option value="no">已婚</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>教育程度：</span>
                                    <Select defaultValue='本科' style={{ width: 150 }}>
                                        <Option value="q">高中以下</Option>
                                        <Option value="w">高中</Option>
                                        <Option value="e">大专</Option>
                                        <Option value="r">大专</Option>
                                        <Option value="t">本科</Option>
                                        <Option value="y">硕士以上</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>手机号码2：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>港澳通行证：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>护照编号：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                            </div>
                            :''
                    }
                    {
                        this.state.status === "money"
                        ? <div className="clear-box">
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>开户行：</span>
                                    <Select defaultValue='招商银行' style={{ width: 150 }}>
                                        <Option value="建设银行">建设银行</Option>
                                        <Option value="浦发银行">浦发银行</Option>
                                        <Option value="工商银行">工商银行</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>开户账号：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>征信评估：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">优秀</Option>
                                        <Option value="w">优良</Option>
                                        <Option value="e">良好</Option>
                                        <Option value="r">一般</Option>
                                        <Option value="t">差</Option>
                                        <Option value="y">极差</Option>
                                    </Select>
                                </div>
                            </div>
                            : ''
                    }
                    {
                        this.state.status === "offer"
                        ? <div className="clear-box">
                                <div className="input-item-float_width">
                                    <span className="must">*</span>
                                    <span>单位名称：</span>
                                    <div className="input-collection_width">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float_width">
                                    <span className="must">*</span>
                                    <span>单位地址：</span>
                                    <div className="input-collection_width">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>行业：</span>
                                    <Select defaultValue='IT' style={{ width: 150 }}>
                                        <Option value="q">IT</Option>
                                        <Option value="w">金融</Option>
                                        <Option value="e">医疗</Option>
                                        <Option value="r">园林建设</Option>
                                        <Option value="t">教育培训</Option>
                                        <Option value="y">室内装修</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>开户账号：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">1</Option>
                                        <Option value="w">2</Option>
                                        <Option value="e">3</Option>
                                        <Option value="r">4</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>所在部门：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>入职时间：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>工作年限：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">1年</Option>
                                        <Option value="w">2年</Option>
                                        <Option value="e">3年</Option>
                                        <Option value="r">3年以上</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>担任职务：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>月平均收入：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>收入发放方式：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">支付宝</Option>
                                        <Option value="w">微信</Option>
                                        <Option value="e">储蓄卡</Option>
                                        <Option value="r">现金</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>月支出：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>是否缴纳社保：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">是</Option>
                                        <Option value="w">否</Option>
                                    </Select>
                                </div>
                            </div>
                            : ''
                    }
                    {
                        this.state.status === "home"
                        ? <div className="clear-box">
                                <div className="input-item-float">
                                    <span>配偶姓名：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>配偶联系方式：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>是否知悉贷款：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">是</Option>
                                        <Option value="w">否</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>家庭成员姓名：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>成员联系方式：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>家庭成员关系：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">父子</Option>
                                        <Option value="w">母子</Option>
                                        <Option value="w">兄弟,兄妹</Option>
                                        <Option value="w">其他</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>联系人1：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>与联系人关系：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>联系人电话：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }
                    {
                        this.state.status === "adress"
                        ? <div className="clear-box">
                                <div className="input-item-float" style={{width: 400}}>
                                    <span className="must">*</span>
                                    <span>住宅地址：</span>
                                    <div className="input-collection_width">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span className="must">*</span>
                                    <span>住宅性质：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float" style={{width: 200}}>
                                    <span className="must">*</span>
                                    <span>居住年限：</span>
                                    <div className="input-collection" style={{width: 100}}>
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float" style={{width: 600}}>
                                    <span className="must">*</span>
                                    <span>共同居住人：</span>
                                    <Checkbox >父母</Checkbox>
                                    <Checkbox >配偶</Checkbox>
                                    <Checkbox >子女</Checkbox>
                                    <Checkbox >亲戚</Checkbox>
                                    <Checkbox >朋友</Checkbox>
                                    <Checkbox >同事</Checkbox>
                                    <Checkbox >独居</Checkbox>
                                </div>
                                <div className="input-item-float-line">
                                    <span>房产地址：</span>
                                    <div className="input-collection" style={{width: 300}}>
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>建筑年份：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>房产面积：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>房产性质：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">租期房</Option>
                                        <Option value="w">合同房</Option>
                                        <Option value="w">分期房</Option>
                                        <Option value="w">拆迁房</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>房产使用状况：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">1年</Option>
                                        <Option value="w">2年</Option>
                                        <Option value="w">3年</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>房产取得方式：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">购买</Option>
                                        <Option value="w">转租</Option>
                                        <Option value="w">分期</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>购买时间：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">1994</Option>
                                        <Option value="w">1995</Option>
                                        <Option value="w">1996</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>是否有贷款：</span>
                                    <Select defaultValue='' style={{ width: 150 }}>
                                        <Option value="q">有</Option>
                                        <Option value="w">无</Option>
                                    </Select>
                                </div>
                                <div className="input-item-float">
                                    <span>贷款银行：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>贷款金额：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>贷款期限(至)：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
                                    </div>
                                </div>
                                <div className="input-item-float">
                                    <span>月还款额：</span>
                                    <div className="input-collection">
                                        <input className="message-input" type="text"/>
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

export default IndexClient;