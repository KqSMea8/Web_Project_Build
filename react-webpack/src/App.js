import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import './styles.css'

import UseJquery from './components/UseJquery'
import Button from './components/Button'
import Input from './components/Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      number:1,
    }
  }

  render() {
    return (
      <div className="test">
        {/* <Button/>
        <Input
          type = 'date'
        /> */}
        <div className="react-button-section">
          <div className="react-number">React : {this.state.number}</div>
          <button
            className="react-button"
            onClick={()=>this.setState({number:this.state.number+1})}
          >reactButton</button>
          <UseJquery
            didMount={(el)=>{
              $('.jquery-button').on('click',()=>{
                const jqueryNumberNode = el.children('.jquery-number')
                let number = Number(jqueryNumberNode.text()) + 1
                console.log(number)
                jqueryNumberNode.text(number)
              })
            }}
            willUnmount={()=>{
              console.log('destroy')
            }}
        >
          <div className="jquery-button-section">
            <div className="jquery-number">1</div>
            <button className="jquery-button">jqueryButton</button>
          </div>
        </UseJquery>
        </div>

        
      </div>
    )
  }
}

export default App