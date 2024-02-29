import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

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
