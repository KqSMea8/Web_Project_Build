import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setDemoData
} from '../../actions/demo'

const mapStateToProps = state => ({
  demoData: state.demo.demoData
})

class Demo extends Component {
  render() {
    return (
      <div>
        <div>123</div>
        <div>{this.props.demoData}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Demo)