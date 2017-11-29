import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import IndexRouter from '../Page/Order/HotelOrder/'
import FlightOrder from '../Page/Order/FlightOrder/'
import FlightOrderDetail from '../Page/Order/FlightOrderDetail'
import HotelOrderDetail from '../Page/Order/HotelOrderDetail'
import HotelServerOrder from '../Page/Order/HotelServerOrder'
import HotelServerOrderDetail from '../Page/Order/HotelServerOrderDetail'
import FlightServerOrder from '../Page/Order/FlightServerOrder'
import FlightServerDetail from '../Page/Order/FlightServerOrderDetail'
import NotFound from '../Page/404'
import APP from '../Page/index'

import Login from '../Page/Login'
import LoginHome from '../Page/Login/LoginHome'

// 如果是大型项目，router部分就需要做更加复杂的配置

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={APP}>>
                    <IndexRoute  component={IndexRouter} />
                    <Route path='/hotel/detail:detail' component={HotelOrderDetail}/>
                    <Route path='/hotelserver' component={HotelServerOrder}/>
                    <Route path='/hotelserver/detail:detail' component={HotelServerOrderDetail}/>
                    <Route path='/flight' component={FlightOrder}/>
                    <Route path='/flight/detail:detail' component={FlightOrderDetail}/>
                    <Route path='/flightserver' component={FlightServerOrder}/>
                    <Route path='/flightserver/detail:detail' component={FlightServerDetail}/>
                    <Route path='/error' component={NotFound}/>
                </Route>
                <Route path='/login' component={Login}/>
                <Route path='/loginHome' component={LoginHome}/>
            </Router>
        )
    }
}

export default RouterMap