import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

class UseJquery extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.jqueryNode = $(this.el).children()
    this.props.didMount(this.jqueryNode)
    console.log(this.jqueryNode)
  }

  componentWillUnmount() {
    this.props.willUnmount()
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