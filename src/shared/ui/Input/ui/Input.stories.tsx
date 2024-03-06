import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    value: 'ffffswedwe',
    autofocus: true,
    placeholder: 'Enter text',
  },
}
