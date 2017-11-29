import React, { Component } from 'react';
import { Input } from 'antd';
import './style.css'


class Form extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { name, value, refType } = this.props;
        return (
            <div>
                {name}：
                <Input
                    value={value}
                    onChange={this.props.handleChange}
                    ref={refType}
                />
            </div>
        );
    }
}

export default Form;