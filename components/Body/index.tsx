import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  background-color: #f2f2f3;
  padding: 10px;
  flex: 1;
`

const Body = ({ children }: any) => (
  <Wrapper>{children}</Wrapper>
)

export default Body