import React, { Component } from 'react';
import Select from '../../../../Component/Select/Select'
import SelectTime from '../../../../Component/SelectTime/SelectTime'
import { Button } from 'antd';
import {changeValue,clearHotelRecord } from "../../../../Action/OrderAction"

import {connect} from 'react-redux'



class Head extends Component {
    constructor () {
        super()
    }

    handleChange () {
        const {dispatch} = this.props
        dispatch(changeValue({
            orderId: this.refs.a.value,
            reservedPhone: this.refs.b.value,
            userId: this.refs.c.value,
            hotelName: this.refs.d.value,
        }))
    }


    render() {
        const {dispatch} = this.props
        return (
            <div className="form-message">
                <div className="float-message selector">
                    <div>
                        订单编号：
                        <input
                            className="search-input"
                            value={this.props.orderId}
                            onChange={this.handleChange.bind(this)}
                            ref='a'
                        />
                    </div>
                </div>
                <div className="float-message selector">
                    <div>
                        预留电话：
                        <input
                            className="search-input"
                            value={this.props.reservedPhone}

                            onChange={this.handleChange.bind(this)}
                            ref='b'
                        />
                    </div>
                </div>
                <div className="float-message selector">
                    <div>
                        用户ID：
                        <input
                            className="search-input"
                            value={this.props.userId}
                            onChange={this.handleChange.bind(this)}
                            ref='c'
                        />
                    </div>
                </div>
                <div className="float-message selector">
                    <div>
                        酒店名称：
                        <input
                            className="search-input"
                            value={this.props.hotelName}
                            onChange={this.handleChange.bind(this)}
                            ref='d'
                        />
                    </div>
                </div>

                <div className="float-message selector">
                    <label className="labe"> 订单类型：</label>
                </div>
                <div className="float-message ">
                    <Select name={'全部订单'}/>
                </div>
                <div className="float-message selector ">
                    <label className="labe left"> 订单时间：</label>
                </div>
                <div className="float-message">
                    <SelectTime/>
                </div>
                <div className="float-message">
                    <Button type="primary">搜索</Button>
                </div>
                <div className="float-message">
                    <Button onClick={() => {dispatch(clearHotelRecord())} }>清空</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orderId: state.HotelOrderReducer.orderId,
    reservedPhone: state.HotelOrderReducer.reservedPhone,
    userId: state.HotelOrderReducer.userId,
    hotelName: state.HotelOrderReducer.hotelName
});

export default connect(mapStateToProps)(Head);