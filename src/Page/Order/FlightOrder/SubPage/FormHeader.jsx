import React, { Component } from 'react';
import SelectTime from '../../../../Component/SelectTime/SelectTime'
import { Button } from 'antd';
import {changeFlightValue, clearFlightRecord} from "../../../../Action/OrderAction"

import {connect} from 'react-redux'


class FlightHead extends Component {
    constructor () {
        super()
    }

    handleChange () {
        const {dispatch} = this.props
        dispatch(changeFlightValue({
            orderId: this.refs.a.value,
            reservedPhone: this.refs.b.value,
            userId: this.refs.c.value,
        }))
    }

    render() {
        const {dispatch} = this.props
        return (
            <div className="form-message">
                <div className="float-message">
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
                <div className="float-message">
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
                <div className="float-message">
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
                <div className="block">
                    <div className="float-message selector hhh">
                        <label className="labe"> 订单时间：</label>
                    </div>
                    <div className="float-message">
                        <SelectTime/>
                    </div>
                </div>
                <div className="block">
                    <div className="float-message">
                        <Button type="primary">搜索</Button>
                    </div>
                    <div className="float-message">
                        <Button onClick={() => {dispatch(clearFlightRecord())} }>清空</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orderId: state.FlightOrderReducer.orderId,
    reservedPhone: state.FlightOrderReducer.reservedPhone,
    userId: state.FlightOrderReducer.userId,
});

export default connect(mapStateToProps)(FlightHead);