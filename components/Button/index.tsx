import React from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent } from 'react-native'

type Props = {
  title: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Wrapper = styled.TouchableOpacity`
  height: 44px;
  margin: 20px 0;
  background-color: #65a300;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`

const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
`

const Button = ({ title, onPress }: Props) => (
  <Wrapper onPress={onPress}>
    <Text>{title}</Text>
  </Wrapper>
)

export default Button

