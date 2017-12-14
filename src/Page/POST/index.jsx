import React, { Component } from 'react';
import Xitong from '../SmartComponent/Menu/Menu'


class Head extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']
        return (
            <div>
                <Xitong focus={'订单管理'} others={options} active={'order'}/>
                我是POST管理页面
            </div>
        );
    }
}

export default Head;