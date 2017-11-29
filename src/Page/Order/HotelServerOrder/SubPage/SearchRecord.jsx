import React, { Component } from 'react';
import Record from '../../../SmartComponent/Menu/RecordMenu'
import { browserHistory} from 'react-router'
import { Table } from 'antd';


class SearchRecord extends Component {
    constructor () {
        super()
        this.state = {
            currentData: '全部售后',
            current: 'mail'
        }
    }


    statusChange (option) {
        const statu = ['已取消','新单,等待确认','已确认','可入住','完成入住']
        return statu[option-1]
        console.log(option)
    }

    handleClick (record, index, event) {
        browserHistory.push('/hotelserver/detail:'+ record.number)
    }


    handleSearch (e) {
        console.log(e.item.props.children)
        this.setState({
            currentData: e.item.props.children,
            current: e.key
        });
    }

    render() {
        let options = [];
        const { record } = this.props;
        let recordType = [];

        record.filter((data, key) => {
            if(data !== '' && data.status == 3 && this.state.currentData == '退款中') {
                return recordType.push(data)
            }
            if(data !== '' && data.status == 1 && this.state.currentData == '退款完成') {
                return recordType.push(data)
            }
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
            title: '用户ID',
            dataIndex: 'id',
        },{
            title: '退款金额',
            dataIndex: 'kind',
        },{
            title: '预留手机号',
            dataIndex: 'mobile',
        },{
            title: '入住酒店',
            dataIndex: 'hotel',
        },{
            title: '申请时间',
            dataIndex: 'order',
        }];
        recordType.map((option, key) => {
            let line = {
                key: key,
                number: option.hotelOrderId,
                status: this.statusChange(option.status),
                id: option.bookName,
                kind: option.roomName,
                mobile: option.bookPhone,
                hotel: option.hotelName,
                order: option.checkInDate
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
                       onRowClick={this.handleClick} />
            </div>

        );
    }
}

export default SearchRecord;