import React, { Component } from 'react'

class Input extends Component {
  render () {
    const {type} = this.props
    return (
      <input type={type} />
    )
  }
}

export default Input
