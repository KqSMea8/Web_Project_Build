import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './components/Button'
import Input from './components/Input'
import './styles.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="test">
        <Button
          size="large"
          buttonFont="啊啊啊啊"
        />
        <Button
          size="small"
          buttonFont="三大大大大"
        />
        <Button/>
        <Input
          type = 'date'
        />
      </div>
    )
  }
}

export default App