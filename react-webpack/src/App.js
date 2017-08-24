import React, { Component } from 'react'
import { render } from 'react-dom'
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
        <p>success</p>
        <p>
          {this.state.number}
        </p>
        <button onClick={()=>this.setState({number:this.state.number + 1})}>+</button>
      </div>
    )
  }
}

export default App