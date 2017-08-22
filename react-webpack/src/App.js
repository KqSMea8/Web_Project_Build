import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React 123'
    }
  }

  render() {
    return (
      <div className="test">
        why you are not use??
        <p>
          {this.state.name}
        </p>
      </div>
    )
  }
}

export default App