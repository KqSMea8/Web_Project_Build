import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { size, buttonFont } = this.props
    let buttonClass = 'button'
    switch (size) {
      case 'large':
        buttonClass += ' large'
        break

      case 'small':
        buttonClass += ' small'
        break

      default:
        buttonClass += ' normall'
        break
    }
    return (
      <button className={buttonClass}>{buttonFont ? buttonFont : '确定'}</button>
    )
  }
}

export default Button