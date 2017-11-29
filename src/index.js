import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RouteMap from './Config/routerMap'
import SideMenu from './Page/SmartComponent/SideMenu/SideMenu';
import './static/css/common.css'
import './static/css/font.css'

import configureStore from './store/configureStore'

// 创建 Redux 的 store 对象
const store = configureStore()

render(
    <Provider store={store} >
        <div className="container">
            <SideMenu />
            <RouteMap />
        </div>
    </Provider>,
    document.getElementById('root')
)

