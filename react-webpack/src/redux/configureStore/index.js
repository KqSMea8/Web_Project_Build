
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import middleware from '../middleware'

const configureStore = () => {
  // applyMiddleware(thunk, middleware)
  let enhancer = applyMiddleware(...middleware)

  const store = createStore(reducers, enhancer)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(reducers)
      })
    }
  }
  return store
}

export default configureStore
