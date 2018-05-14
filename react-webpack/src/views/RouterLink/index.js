import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router, // HashRouter / BrowserRouter
  Link
} from 'react-router-dom'
import {
  setDemoData
} from '../../redux/actions/demo'
import { renderRoutes } from 'react-router-config'
import store from '../../redux/store'

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
      <Router>
        <div>
          <button onClick={() => store.dispatch(setDemoData())}>change the value</button>
          {
            this.props.demoData.map((item) => {
              return <div key={item.id}>{item.name}</div>
            })
          }
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/topics'>主题列表</Link></li>
          </ul>
          {renderRoutes(routes)}
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(RouterLink)
