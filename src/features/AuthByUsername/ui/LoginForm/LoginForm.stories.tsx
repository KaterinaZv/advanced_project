import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    initialState: {
      loginForm: { username: '123', password: 'asd' },
    },
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  args: {},
}
