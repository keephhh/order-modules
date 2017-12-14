import React, { Component } from 'react';
import {Table} from 'antd';


class ServerLog extends Component {
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
            case 'yes':
                this.setState({
                    status: data
                })
                break;
            case 'no':
                this.setState({
                    status: data
                })
                break;
            case 'busy':
                this.setState({
                    status: data
                })
                break;
            case 'noLink':
                this.setState({
                    status: data
                })
                break;
        }
    }

    render() {
        const columns = [{
            title: '最后通话时间',
            dataIndex: 'time',
        }, {
            title: '通话状态',
            dataIndex: 'status',
        }, {
            title: '跟进人',
            dataIndex: 'people',
        },{
            title: '通话内容',
            dataIndex: 'content',
        },{
            title: '预计下次联系日期',
            dataIndex: 'nextTime',
        }];

        const data = [{
            key: '1',
            time: '2017-10-01',
            status: '忙碌中',
            people: '陈巧玲',
            content: '用户对威尼斯人比较感兴趣，3个月内可能会有出行计划',
            nextTime: '2017-10-01 10:01:01',
        },{
            key: '2',
            time: '2017-10-01',
            status: '忙碌中',
            people: '发生',
            content: '无',
            nextTime: '2017-10-01 10:01:01',
        },{
            key: '3',
            time: '2017-10-01',
            status: '忙碌中',
            people: '阿斯达',
            content: '无',
            nextTime: '2017-10-01 10:01:01',
        },{
            key: '4',
            time: '2017-10-01',
            status: '忙碌中',
            people: '陈巧玲',
            content: '没意向去，年凡凡速度快',
            nextTime: '2017-10-01 10:01:01',
        },{
            key: '5',
            time: '2017-10-01',
            status: '忙碌中',
            people: '方式',
            content: '无',
            nextTime: '2017-10-01 10:01:01',
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
                        <span className={(this.state.status === "yes" ? "isFilterActive" : "")} onClick={() => {this.handleClick("yes")}}>有意向</span>
                        <span className={(this.state.status === "no" ? "isFilterActive" : "")} onClick={() => {this.handleClick("no")}}>暂无意向</span>
                        <span className={(this.state.status === "busy" ? "isFilterActive" : "")} onClick={() => {this.handleClick("busy")}}>忙碌中</span>
                        <span className={(this.state.status === "noLink" ? "isFilterActive" : "")} onClick={() => {this.handleClick("noLink")}}>未接通</span>
                    </div>
                </div>
                <div className="serverLog-table">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)} />
                </div>
            </div>
        );
    }
}

export default ServerLog;