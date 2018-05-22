import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDemoData } from '../../redux/actions/demo'

import store from '../../redux/store'

const mapStateToProps = state => ({
  demoData: state.demo.demoData
})

class RouterLink extends Component {
  render () {
    return (
      <div className='router-link'>
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
      </div>
    )
  }
}

export default connect(mapStateToProps)(RouterLink)
