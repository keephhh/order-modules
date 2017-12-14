import React, { Component } from 'react';
import { Icon, Table} from 'antd';


class OrderRecord extends Component {
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
            case 'hotel':
                this.setState({
                    status: data
                })
                break;
            case 'flight':
                this.setState({
                    status: data
                })
                break;
        }
    }

    render() {
        const columns = [{
            title: '订单号',
            dataIndex: 'orderId',
        }, {
            title: '订单创建时间',
            dataIndex: 'orderTime',
        }, {
            title: '订单类型',
            dataIndex: 'orderType',
        },{
            title: '订单状态',
            dataIndex: 'orderStatus',
        },{
            title: '交易金额 (￥)',
            dataIndex: 'orderMoney',
        },{
            title: '订单概要内容',
            dataIndex: 'orderContent',
        }];

        const data = [{
            key: '1',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '2',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '3',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '4',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '5',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '6',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
        },{
            key: '7',
            orderId: 'FQ59361FDB2100353607',
            orderTime: '2017-10-01',
            orderType: '机票',
            orderStatus: '待支付',
            orderMoney: '2,123.00',
            orderContent: '澳门超级大酒店',
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
                        <span className={(this.state.status === "whole" ? "isFilterActive" : "")} onClick={() => {this.handleClick("whole")}}>全部</span>
                        <span className={(this.state.status === "flight" ? "isFilterActive" : "")} onClick={() => {this.handleClick("flight")}}>机票</span>
                        <span className={(this.state.status === "hotel" ? "isFilterActive" : "")} onClick={() => {this.handleClick("hotel")}}>酒店</span>
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
                                    <span className="search-time-span">下单时间：</span>
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
                                    <span className="search-time-span">订单金额：</span>
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
                            </div>
                            <div className="display-search-right">
                                <span>今天</span><span>最近1个月</span><span>3个月</span><span>1年</span>
                            </div>
                        </div>
                        : ''
                }
                <div className="order-table">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)} />
                </div>
            </div>
        );
    }
}

export default OrderRecord;