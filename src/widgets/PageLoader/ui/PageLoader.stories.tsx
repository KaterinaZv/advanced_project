import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof PageLoader>

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
