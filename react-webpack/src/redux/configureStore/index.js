
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import middleware from '../middleware'

const initialState = {}

const configureStore = () => {
  // applyMiddleware(thunk, middleware)
  let enhancer = applyMiddleware(...middleware)

  const store = createStore(reducers, initialState, enhancer)

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('../reducers/index.js', () => {
        // const nextReducer = combineReducers(require('../reducers'))
        // store.replaceReducer(nextReducer)
        store.replaceReducer(require('../reducers/index.js').default)
      })
    }
  }
  return store
}

export default configureStore
