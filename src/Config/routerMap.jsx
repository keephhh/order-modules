import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import IndexRouter from '../Page/OrderManagement/index'
import NotFound from '../Page/404'
import APP from '../Page/index'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={APP}>
                    <IndexRoute component={IndexRouter}/>
                    <Route path='/user' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap