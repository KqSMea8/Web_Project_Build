
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import middleware from '../middleware'

const initialState = {}

// applyMiddleware(thunk, middleware)
let enhancer = applyMiddleware(...middleware)

const store = createStore(reducers, initialState, enhancer)

export default store
