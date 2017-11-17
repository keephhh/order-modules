import React, { Component } from 'react';
import { Select } from 'antd';
import './style.css'

const Option = Select.Option;

class Selects extends Component {
    constructor () {
        super()
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <Select defaultValue={name} style={{ width: 120 }}>
                    <Option value="jack">机票订单</Option>
                    <Option value="lucy">售后订单</Option>
                    <Option value="disabled">预售订单</Option>
                    <Option value="Yiminghe">其他订单</Option>
                </Select>
            </div>
        );
    }
}

export default Selects;