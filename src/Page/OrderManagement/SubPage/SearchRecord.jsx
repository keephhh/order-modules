import React, { Component } from 'react';
import Record from '../../../Component/Menu/Menu'
import { Table } from 'antd';


class SearchRecord extends Component {
    constructor () {
        super()
    }

    render() {
        let options = [];
        const { record } = this.props;
        const columns = [{
            title: '订单号',
            dataIndex: 'number',
        }, {
            title: '订单状态',
            dataIndex: 'status',
        }, {
            title: '用户ID',
            dataIndex: 'id',
        },{
            title: '类型',
            dataIndex: 'kind',
        },{
            title: '预留手机号',
            dataIndex: 'mobile',
        },{
            title: '入住酒店',
            dataIndex: 'hotel',
        },{
            title: '下单时间',
            dataIndex: 'order',
        }];
        record.map((option, key) => {
            let line = {
                key: key,
                number: option.flightOrderId,
                status: option.amount,
                id: option.linkName,
                kind: 'OTA',
                mobile: option.linkMobile,
                hotel: '澳门葡京酒店',
                order: '2017-06-01 09:00'
            }
            options.push(line)
        })
        const option = ['待支付 (1234)','待确认 (2314)','交易成功','退款中','其他']
        return (
            <div className="search-record">
                <span className="search-record-title">搜索结果</span>
                <Record focus={'全部'} others={option} active={'avatar'}/>
                <Table columns={columns} dataSource={options} size="middle" />
            </div>
        );
    }
}

export default SearchRecord;