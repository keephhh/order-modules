import React, { Component } from 'react';
import Record from '../../../SmartComponent/Menu/RecordMenu'
import { browserHistory} from 'react-router'
import {getLocalTime} from "../../../../Action/CommonAction"
import { Table } from 'antd';



class SearchRecord extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            currentData: '全部',
            current: 'mail'
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick (record, index, event) {
        console.log(record)
        browserHistory.push('/flight/detail:'+ record.number)
    }

    statusChange (option) {
        const statu = ['待确认','等待支付','等待出票','出票完成','订单关闭','暂不能出票','已拒单','退款中','退款失败','退款成功','售后处理中']
        return statu[option-1]
        console.log(option)
    }

    handleSearch (e) {
        this.setState({
            currentData: e.item.props.children,
            current: e.key
        });
    }



    render() {
        let options = [];
        let recordType = [];
        const { record } = this.props;

        record.filter((data, key) => {
            if(data !== '' && data.orderDetail.status === 2 && this.state.currentData == '待支付') {
                return recordType.push(data)
            }
            if(data !== '' && data.orderDetail.status === 1 && this.state.currentData == '待确认') {
                return recordType.push(data)
            }
            if(data !== '' && this.state.currentData === '全部') {
                return recordType.push(data)
            }
            if(data !== '' && data.orderDetail.status === 3  && this.state.currentData == '交易成功') {
                return recordType.push(data)
            }
            if(data !== '' && data.orderDetail.status === 8 && this.state.currentData == '退款中') {
                return recordType.push(data)
            }
            if(data !== '' && data.orderDetail.status === 2 && this.state.currentData == '其他') {
                return recordType.push(data)
            }
        })

        const columns = [{
            title: '订单号',
            dataIndex: 'number',
        }, {
            title: '订单状态',
            dataIndex: 'status',
        }, {
            title: '下单时间',
            dataIndex: 'id',
        },{
            title: '用户ID',
            dataIndex: 'kind',
        },{
            title: '联系方式',
            dataIndex: 'mobile',
        },{
            title: '航班信息',
            dataIndex: 'hotel',
        },{
            title: '最后更新时间',
            dataIndex: 'order',
        }];
        recordType.map((option, key) => {
            let line = {
                key: key,
                number: option.flightOrderId,
                status: this.statusChange(option.orderDetail.status),
                id: getLocalTime(option.createTime/1000),
                kind: option.userId,
                mobile: option.linkMobile,
                hotel: option.orderDetail.flights[0]? option.orderDetail.flights[0].companyName : '',
                order: getLocalTime(option.updateTime/1000)
            }
            options.push(line)
        })
        const option = ['待支付','待确认','交易成功','退款中','其他']
        return (
            <div className="search-record">
                <span className="search-record-title">搜索结果</span>
                <Record
                    focus={'全部'}
                    others={option}
                    active={'avatar'}
                    current={this.state.current}
                    handleSearch={this.handleSearch.bind(this)}
                    account={recordType.length}
                />
                <Table columns={columns}
                       dataSource={options}
                       size="middle"
                       onRowClick={this.handleClick}
                />
                {
                    console.log(recordType)
                }
            </div>
        );
    }
}

export default SearchRecord;