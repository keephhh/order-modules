import React, { Component } from 'react';
import  FormInput from '../../../Component/Form/Form';
import Select from '../../../Component/Select/Select'
import SelectTime from '../../../Component/SelectTime/SelectTime'
import { Button } from 'antd';


class Head extends Component {
    constructor () {
        super()
    }

    render() {
        return (
            <div className="form-message">
               <div className="float-message">
                   <FormInput name={'订单编号'}/>
               </div>
                <div className="float-message">
                    <FormInput name={'预留电话'}/>
                </div>
                <div className="float-message">
                    <FormInput name={'用户ID'}/>
                </div>
                <div className="float-message">
                    <FormInput name={'酒店名称'}/>
                </div>
                <div className="float-message selector">
                    <label className="labe"> 订单类型：</label>
                </div>
                <div className="float-message ">
                    <Select name={'全部订单'}/>
                </div>
                <div className="float-message selector">
                    <label className="labe"> 订单时间：</label>
                </div>
                <div className="float-message">
                    <SelectTime/>
                </div>
                <div className="float-message">
                    <Button type="primary">搜索</Button>
                </div>
                <div className="float-message">
                    <Button>清空</Button>
                </div>
            </div>
        );
    }
}

export default Head;