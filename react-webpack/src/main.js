import React from 'react'
// import ReactDOM, { render } from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import store from './redux/store'
import { history } from './redux/middleware'

// render((
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>
// ), document.getElementById('app'))

render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(App, () => {
    // if you are using harmony modules ({modules:false})
    render(App)
    // in all other cases - re-require App manually
    // render(require('./containers/App'))
  })
}
