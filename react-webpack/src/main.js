import React from 'react'
// import ReactDOM, { render } from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import configureStore from './redux/configureStore'
import { history } from './redux/middleware'

export const store = configureStore()

// ReactDOM.render((
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
    const NextApp = App.default
    render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
