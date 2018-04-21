import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import $ from 'jquery'

import './styles.css'

import UseJquery from './components/UseJquery'
import Button from './components/Button'
import Input from './components/Input'
import StyleComponent from './components/StyleComponent'

import RouterLink from './views/RouterLink'
// import Content from './views/Content'

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
        <UseJquery
          didMount={(el) => {
            $('.jquery-button').on('click', () => {
              const jqueryNumberNode = el.children('.jquery-number')
              let number = Number(jqueryNumberNode.text()) + 1
              jqueryNumberNode.text(number)
            })
          }}
          willUnmount={() => {
            console.log('destroy2')
          }}
        >
          <div className='jquery-button-section'>
            <div className='jquery-number'>1</div>
            <button className='jquery-button'>jqueryButton</button>
          </div>
        </UseJquery>
        <StyleComponent />
        <h4>路由测试</h4>
        <div>
          <RouterLink />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
