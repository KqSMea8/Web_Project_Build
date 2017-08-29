import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  height:20px;
  background:red;
`

class StyleComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container
        onClick={()=>alert('click')}
      >
        123
      </Container>
    )
  }
}

export default StyleComponent