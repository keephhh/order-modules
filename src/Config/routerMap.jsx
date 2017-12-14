import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/* order module
 */
import IndexRouter from '../Page/Order/HotelOrder/'
import FlightOrder from '../Page/Order/FlightOrder/'
import FlightOrderDetail from '../Page/Order/FlightOrderDetail'
import HotelOrderDetail from '../Page/Order/HotelOrderDetail'
import HotelServerOrder from '../Page/Order/HotelServerOrder'
import HotelServerOrderDetail from '../Page/Order/HotelServerOrderDetail'
import FlightServerOrder from '../Page/Order/FlightServerOrder'
import FlightServerDetail from '../Page/Order/FlightServerOrderDetail'

/* CRM module */
import Client from '../Page/CRM/Client/ClientList/index'
import ClientDetail from '../Page/CRM/Client/ClientDetail'
import IndexClientMes from '../Page/CRM/Client/ClientDetail/SubPage/indexClientMes.jsx'
import AccountDetail from '../Page/CRM/Client/ClientDetail/SubPage/accountDetail'
import OrderDe from '../Page/CRM/Client/ClientDetail/SubPage/OrderRecord'
import Integral from '../Page/CRM/Client/ClientDetail/SubPage/Integral'
import TransCoding from '../Page/CRM/Client/ClientDetail/SubPage/Transcoding'
import ServerLog from '../Page/CRM/Client/ClientDetail/SubPage/ServerLog'


/* Cooperative module  */
import Cooperative from '../Page/Cooperative'


/* ContentOperation module  */
import ContentOperation from '../Page/ContentOperation'


/* POST module  */
import Post from '../Page/POST'

/* Finance module  */
import Finance from '../Page/Finance'

/* System module  */
import System from '../Page/System'

/* Extra module */
import NotFound from '../Page/404'
import APP from '../Page/index'

import Login from '../Page/Login'
import LoginHome from '../Page/Login/LoginHome'

// 如果是大型项目，router部分就需要做更加复杂的配置

class RouterMap extends React.Component {
    render() {
        return (
            <div className="router-map">
                <Router history={browserHistory}>
                    <Route path='/' component={APP}>>
                        <IndexRoute  component={IndexRouter} />
                        <Route path='/hotel/detail:detail' component={HotelOrderDetail}/>
                        <Route path='/hotelserver' component={HotelServerOrder}/>
                        <Route path='/hotelserver/detail:detail' component={HotelServerOrderDetail}/>
                        <div className="aaa"><Route path='/flight' component={FlightOrder}/></div>
                        <Route path='/flight/detail:detail' component={FlightOrderDetail}/>
                        <Route path='/flightserver' component={FlightServerOrder}/>
                        <Route path='/flightserver/detail:detail' component={FlightServerDetail}/>

                        <Route path='/cooperative' component={Cooperative}/>

                        <Route path='/client' component={Client}/>
                        <Route path='/clientDetail' component={ClientDetail}>
                            <IndexRoute  component={IndexClientMes} />
                            <Route path='/clientDetail/account' component={AccountDetail}/>
                            <Route path='/clientDetail/order' component={OrderDe}/>
                            <Route path='/clientDetail/transCoding' component={TransCoding}/>
                            <Route path='/clientDetail/integral' component={Integral}/>
                            <Route path='/clientDetail/serverLog' component={ServerLog}/>
                        </Route>

                        <Route path='/contentOperation' component={ContentOperation}/>

                        <Route path='/post' component={Post}/>

                        <Route path='/finance' component={Finance}/>

                        <Route path='/system' component={System}/>

                        <Route path='/error' component={NotFound}/>
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='/loginHome' component={LoginHome}/>
                </Router>
            </div>
        )
    }
}

export default RouterMap