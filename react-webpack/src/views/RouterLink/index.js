import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
// import {
//   setDemoData
// } from '../../actions/demo'
import { renderRoutes } from 'react-router-config'

import ContnetRouter from '../Content/router'

const mapStateToProps = state => ({
  demoData: state.demo.demoData
})

// 合并路由
const routes = [
  ...ContnetRouter
]

class RouterLink extends Component {
  render () {
    return (
      <div>
        <div>Redux测试：{this.props.demoData}</div>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/about'>关于</Link></li>
          <li><Link to='/topics'>主题列表</Link></li>
        </ul>
        {renderRoutes(routes)}
        <div>this is test</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(RouterLink)
