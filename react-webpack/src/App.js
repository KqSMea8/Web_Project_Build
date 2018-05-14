import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import 'normalize.css'
import './styles.scss'
import RouterLink from './views/RouterLink'

class App extends Component {
  render () {
    return (
      <div>
        <RouterLink />
      </div>
    )
  }
}

export default hot(module)(App)
