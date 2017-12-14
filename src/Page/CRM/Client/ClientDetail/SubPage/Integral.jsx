import React, { Component } from 'react';
import {Table} from 'antd';


class Integral extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            status: 'whole',
        }
    }
    handleDoubleClick () {

    }

    handleClick (data) {
        switch (data) {
            case 'whole':
                this.setState({
                    status: data
                })
                break;
            case 'reduce':
                this.setState({
                    status: data
                })
                break;
            case 'add':
                this.setState({
                    status: data
                })
                break;
        }
    }

    render() {
        const columns = [{
            title: '时间',
            dataIndex: 'time',
        }, {
            title: '类型',
            dataIndex: 'type',
        }, {
            title: '数量',
            dataIndex: 'number',
        },{
            title: '余额',
            dataIndex: 'money',
        },{
            title: '操作人',
            dataIndex: 'people',
        },{
            title: '说明',
            dataIndex: 'console',
        }];

        const data = [{
            key: '1',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '2',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '3',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '4',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '5',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '6',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
        },{
            key: '7',
            time: '2017-10-01',
            type: '增加',
            number: '100,000',
            money: '9,900',
            people: '郭黑杰克',
            console: '完善资料奖励',
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
                        <label>订单类型：</label>
                        <span className={(this.state.status === "whole" ? "isFilterActive" : "")} onClick={() => {this.handleClick("whole")}}>全部</span>
                        <span className={(this.state.status === "add" ? "isFilterActive" : "")} onClick={() => {this.handleClick("add")}}>增加</span>
                        <span className={(this.state.status === "reduce" ? "isFilterActive" : "")} onClick={() => {this.handleClick("reduce")}}>消耗</span>
                    </div>
                </div>
                <div className="integral-table">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Integral;