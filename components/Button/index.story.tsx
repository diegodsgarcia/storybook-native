import Button from '.'
import React from 'react'
import { action } from '@storybook/addon-actions'


export default {
  title: 'Button',
  component: Button,
}

export const Test = () => <Button onPress={action('Test')} title="Just a" />
