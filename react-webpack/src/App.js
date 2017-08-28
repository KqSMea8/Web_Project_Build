import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jqery'

import './styles.css'

import UseJquery from './components/UseJquery'
import Button from './components/Button'
import Input from './components/Input'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="test">
        <Button/>
        <Input
          type = 'date'
        />
        <UseJquery>
          <div>123</div>
          <span>123123</span>
        </UseJquery>
      </div>
    )
  }
}

export default App