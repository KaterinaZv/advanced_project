import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof AboutPage>

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
