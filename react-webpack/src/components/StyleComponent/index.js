import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  height:20px;
`

class StyleComponent extends Component {
  render () {
    return (
      <Container
        onClick={() => console.log('click')}
      >
        testStyleComponent
      </Container>
    )
  }
}

export default StyleComponent
