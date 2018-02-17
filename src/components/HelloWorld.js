import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: midnightblue;
  padding: 20px 0;
`

const Title = styled.h1`
  color: ghostwhite;
  font-family: sans-serif;
  text-align: center;
`

const HelloWorld = () => (
    <Header>
        <Title>React and Parcel Boilerplate</Title>
    </Header>
)

export default HelloWorld
