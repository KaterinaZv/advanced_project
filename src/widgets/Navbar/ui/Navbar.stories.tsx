import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}
