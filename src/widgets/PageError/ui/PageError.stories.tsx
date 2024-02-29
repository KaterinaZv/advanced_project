import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof PageError>

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
