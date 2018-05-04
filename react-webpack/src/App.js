import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './styles.scss'
import Button from './components/Button'
import Input from './components/Input'
import StyleComponent from './components/StyleComponent'
import RouterLink from './views/RouterLink'

class App extends Component {
  constructor () {
    super()
    this.state = {
      number: 1,
      test: '22'
    }
  }

  render () {
    return (
      <div className='test'>
        <Button
          size='large'
        />
        <Input
          type='date'
        />
        <div className='react-button-section'>
          <div className='react-number'>React : {this.state.number}</div>
          <button
            className='react-button'
            onClick={() => this.setState({ number: this.state.number + 1 })}
          >reactButton</button>
        </div>
        <StyleComponent />
        <h4>路由测试123</h4>
        <div>
          <RouterLink />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
