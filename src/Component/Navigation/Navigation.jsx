import React, { Component } from 'react';
import './style.css'
import { Button } from 'antd';


class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { lines } = this.props;
        return (
            <div className="navigation-message">
                首页
                {
                    lines.map((line, i) => <span key={i}> > {line} </span>)
                }
                {
                    this.props.ebutton == 'none'
                        ?   <div className="export_button">
                                <Button type="primary">导出</Button>
                            </div>
                        : ''
                }
            </div>
        );
    }
}

export default Navigation;