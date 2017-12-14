import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducer/OrderReducer/index'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        applyMiddleware(thunkMiddleware),
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}

