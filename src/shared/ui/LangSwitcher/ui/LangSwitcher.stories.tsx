import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

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
