import React, { Component } from 'react';
import { Input } from 'antd';
import './style.css'


class Form extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                {name}：<Input />
            </div>
        );
    }
}

export default Form;