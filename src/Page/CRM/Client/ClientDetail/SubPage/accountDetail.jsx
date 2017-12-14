import React, { Component } from 'react';
import { Icon, Table} from 'antd';



class AccountDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            changeIcon: true,
            displaySearch: false,
            status: 'whole',
        }
    }

    handleDoubleClick () {

    }

    handleSearch () {
        this.setState({
            displaySearch: !this.state.displaySearch,
            changeIcon: !this.state.changeIcon,
        })
    }
    handleClick (data) {
        switch (data) {
            case 'whole':
                this.setState({
                    status: data
                })
                break;
            case 'repayment':
                this.setState({
                    status: data
                })
                break;
            case 'deposit':
                this.setState({
                    status: data
                })
                break;
            case 'saveCode':
                this.setState({
                    status: data
                })
                break;
            case 'withdrawals':
                this.setState({
                    status: data
                })
                break;
            case 'outputCode':
                this.setState({
                    status: data
                })
                break;
            case 'pay':
                this.setState({
                    status: data
                })
                break;
        }
    }

    render() {
        const columns = [{
            title: '交易时间',
            dataIndex: 'time',
        }, {
            title: '交易流水号',
            dataIndex: 'number',
        }, {
            title: '交易类型',
            dataIndex: 'type',
        },{
            title: '交易金额 (￥)',
            dataIndex: 'money',
        },{
            title: '交易账户',
            dataIndex: 'account',
        },{
            title: '交易内容',
            dataIndex: 'content',
        }];

        const data = [{
            key: '1',
            time: '2017-10-01',
            number: 'cv13009876543',
            type: '离场存码',
            money: '12,234.00',
            account: '信用账户',
            content: '申请提现',
        },{
            key: '2',
            time: '2017-10-01',
            number: 'cv13009876543',
            type: '离场存码',
            money: '12,234.00',
            account: '信用账户',
            content: '申请提现',
        },{
            key: '3',
            time: '2017-10-01',
            number: 'cv13009876543',
            type: '离场存码',
            money: '12,234.00',
            account: '信用账户',
            content: '申请提现',
        },{
            key: '4',
            time: '2017-10-01',
            number: 'cv13009876543',
            type: '离场存码',
            money: '12,234.00',
            account: '信用账户',
            content: '申请提现',
        },{
            key: '5',
            time: '2017-10-01',
            number: 'cv13009876543',
            type: '离场存码',
            money: '12,234.00',
            account: '信用账户',
            content: '申请提现',
        }]

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };
        return (
            <div className="index-client-mes">
                <div className="navigation-mes">
                    <div className="span">
                        <label>交易类型：</label>
                        <span className={(this.state.status === "pay" ? "isFilterActive" : "")} onClick={() => {this.handleClick("pay")}}>消费</span>
                        <span className={(this.state.status === "outputCode" ? "isFilterActive" : "")} onClick={() => {this.handleClick("outputCode")}}>出码</span>
                        <span className={(this.state.status === "withdrawals" ? "isFilterActive" : "")} onClick={() => {this.handleClick("withdrawals")}}>提现</span>
                        <span className={(this.state.status === "saveCode" ? "isFilterActive" : "")} onClick={() => {this.handleClick("saveCode")}}>离场存码</span>
                        <span className={(this.state.status === "deposit" ? "isFilterActive" : "")} onClick={() => {this.handleClick("deposit")}}>存入</span>
                        <span className={(this.state.status === "repayment" ? "isFilterActive" : "")} onClick={() => {this.handleClick("repayment")}}>还款</span>
                        <span className={(this.state.status === "whole" ? "isFilterActive" : "")} onClick={() => {this.handleClick("whole")}}>全部</span>
                    </div>
                    <div className="client-select">
                        {
                            this.state.changeIcon
                            ? <Icon type="down" />
                            : <Icon type="up" />
                        }
                        <div className="client-select-item" onClick={this.handleSearch.bind(this)}>{ this.state.displaySearch ? '收起筛选' : '高级筛选'}</div>
                    </div>
                </div>
                {
                   this.state.displaySearch
                   ? <div className="display-mes">
                         <div className="display-search-left">
                             <div className="left-item">
                                 <span className="search-time-span">交易时间：</span>
                                 <div className="search-time-item">
                                     <div className="search-time-box">
                                         <input type="text" className="search-time-input"/>
                                     </div>
                                     <div className="search-time-line">
                                         --
                                     </div>
                                     <div className="search-time-box">
                                         <input type="text" className="search-time-input"/>
                                     </div>
                                 </div>
                             </div>
                             <div className="left-item">
                                 <span className="search-time-span">金额范围：</span>
                                 <div className="search-time-item">
                                     <div className="search-time-box">
                                         <input type="text" className="search-time-input"/>
                                     </div>
                                     <div className="search-time-line">
                                         --
                                     </div>
                                     <div className="search-time-box">
                                         <input type="text" className="search-time-input"/>
                                     </div>
                                 </div>
                             </div>
                             <div className="left-item">
                                 <span className="search-time-span">交易账户：</span>
                                 <span className="search-time-span">信用账户</span>
                                 <span className="search-time-span">现金账户</span>
                             </div>
                         </div>
                         <div className="display-search-right">
                             <span>今天</span><span>最近1个月</span><span>3个月</span><span>1年</span>
                         </div>
                       </div>
                   : ''
                }
                <div className="account-table">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)} />
                </div>
            </div>
        );
    }
}

export default AccountDetail;