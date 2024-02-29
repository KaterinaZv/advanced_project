import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Loader>

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
