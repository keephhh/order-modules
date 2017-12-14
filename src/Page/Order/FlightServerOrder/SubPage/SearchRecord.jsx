import React, { Component } from 'react';
import Record from '../../../SmartComponent/Menu/RecordMenu'
import { browserHistory} from 'react-router'
import {getLocalTime} from "../../../../Action/CommonAction"
import { Table } from 'antd';



class SearchRecord extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            currentData: '全部售后',
            current: 'mail'
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick (record, index, event) {
        browserHistory.push('/flightserver/detail:'+ record.number)
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
            // if(data !== '' && data.orderDetail[0].status == 3 && this.state.currentData == '退款中') {
            //     return recordType.push(data)
            // }
            // if(data !== '' && data.orderDetail[0].status == 2 && this.state.currentData == '退款完成') {
            //     return recordType.push(data)
            // }
            if(data !== '' && this.state.currentData == '全部售后') {
                return recordType.push(data)
            }
        })

        const columns = [{
            title: '订单号',
            dataIndex: 'number',
        }, {
            title: '退款状态',
            dataIndex: 'status',
        }, {
            title: '提交时间',
            dataIndex: 'id',
        },{
            title: '退款金额',
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
        const option = ['退款中','退款完成']
        return (
            <div className="search-record">
                <span className="search-record-title">搜索结果</span>
                <Record focus={'全部售后'}
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
            </div>
        );
    }
}

export default SearchRecord;