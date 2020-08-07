import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

type Props = {
  title: string;
  subtitle: string;
}

const Wrapper = styled.View`
  height: 100px;
  background-color: #fff;
  justify-content: center;
  padding: 15px;
`

const Title = styled.Text`
  color: #070817;
  font-size: 22px;
`

const Subtitle = styled.Text`
  color: #070817;
  font-size: 14px;
`

const Header = ({ title, subtitle }: Props) => (
  <Wrapper>
    <StatusBar style="auto" />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
)

export default Header