import React, { Component } from 'react'
import styles from './index.scss'

class Button extends Component {
  render () {
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
      <button className={buttonClass}>{buttonFont || '确定'}</button>
    )
  }
}

export default Button
