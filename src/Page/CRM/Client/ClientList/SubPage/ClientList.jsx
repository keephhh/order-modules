import React, { Component } from 'react';
import { browserHistory} from 'react-router'
import { Table } from 'antd';


class Head extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleDoubleClick () {
        browserHistory.push('/clientDetail')
    }

    render() {

        const columns = [{
            title: '客户真实姓名',
            dataIndex: 'name',
            // render: text => <a href="https://juejin.im/timeline">{text}</a>,
        }, {
            title: '联系电话',
            dataIndex: 'phone',
        }, {
            title: '注册时间',
            dataIndex: 'time',
        },{
            title: '业务状态',
            dataIndex: 'status',
        },{
            title: '累计消费 (￥)',
            dataIndex: 'totalPay',
        },{
            title: '累计转码 (￥)',
            dataIndex: 'transCoding',
        },{
            title: '代理',
            dataIndex: 'proxy',
        },{
            title: '销售经理',
            dataIndex: 'sale',
        },{
            title: '最近沟通时间',
            dataIndex: 'lastTime',
        },];
        const data = [{
            key: '1',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '2',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '3',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '4',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '5',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '6',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '7',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '8',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '9',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '10',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '11',
            name: '孙建国',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '12',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '13',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        },{
            key: '14',
            name: 'John Brown',
            phone: '+86 130 0987 6543',
            time: '2017-10-01 12:21:23',
            status: '已转码',
            totalPay: '12,300.00',
            transCoding: '21,997.00',
            proxy: '许复',
            sale: '林伟华',
            lastTime: '2017-10-01 10:01:01'
        }];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };
        return (
            <div className="client-list">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)}/>
            </div>
        );
    }
}

export default Head;