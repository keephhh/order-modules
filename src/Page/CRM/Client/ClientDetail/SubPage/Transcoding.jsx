import React, { Component } from 'react';
import { Icon, Table} from 'antd';


class Transcoding extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleDoubleClick () {

    }


    render() {
        const columns = [{
            title: '转码时间',
            dataIndex: 'transCodeTime',
        }, {
            title: '赌场 (地理位置)',
            dataIndex: 'position',
        }, {
            title: '赌厅 (名称)',
            dataIndex: 'name',
        },{
            title: '转码金额 (HK$)',
            dataIndex: 'transCodeMoney',
        },{
            title: '经手人',
            dataIndex: 'people',
        },{
            title: '公关',
            dataIndex: 'public',
        }];

        const data = [{
            key: '1',
            transCodeTime: '2017-10-01',
            position: '澳门新葡京',
            name: '金钱豹',
            transCodeMoney: '80,002,123.00',
            people: '风云',
            public: '李曼曼',
        },{
            key: '2',
            transCodeTime: '2017-10-01',
            position: '澳门新葡京',
            name: '金钱豹',
            transCodeMoney: '80,002,123.00',
            people: '风云',
            public: '李曼曼',
        },{
            key: '3',
            transCodeTime: '2017-10-01',
            position: '澳门新葡京',
            name: '金钱豹',
            transCodeMoney: '80,002,123.00',
            people: '风云',
            public: '李曼曼',
        },{
            key: '4',
            transCodeTime: '2017-10-01',
            position: '澳门新葡京',
            name: '金钱豹',
            transCodeMoney: '80,002,123.00',
            people: '风云',
            public: '李曼曼',
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
                <div className="transCoding-table">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRowDoubleClick={this.handleDoubleClick.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Transcoding;