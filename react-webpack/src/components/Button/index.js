import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './index.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { size, buttonFont } = this.props
    let buttonClass = ''
    switch (size) {
      case 'large':
        buttonClass = styles.large
        break

      case 'small':
        buttonClass = styles.small
        break

      default:
        buttonClass = styles.normall
        break
    }
    return (
      <button className={buttonClass}>{buttonFont ? buttonFont : '确定'}</button>
    )
  }
}

export default Button