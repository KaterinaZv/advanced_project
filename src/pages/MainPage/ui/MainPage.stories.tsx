import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof MainPage>

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
