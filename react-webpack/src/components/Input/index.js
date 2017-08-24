import React, { Component } from 'react'
import { render } from 'react-dom'

class Input extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {type} = this.props
    return (
      <input type={type}/> 
    )
  }
}

export default Input