import React, { Component } from 'react'
import { render } from 'react-dom'

class UseJquery extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div
        className="jquery-box"
        ref={el => this.el = el }
      >
        {this.props.children}
      </div>
    )
  }
}

export default UseJquery