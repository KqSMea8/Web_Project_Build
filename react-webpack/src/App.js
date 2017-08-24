import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './Button'
import Table from './Table'
import './styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      number: 1
    }
  }

  render() {
    return (
      <div className="test">
        <Button
          
        />
        <button onClick={()=>this.setState({number:this.state.number + 1})}>+</button>
      </div>
    )
  }
}

export default App