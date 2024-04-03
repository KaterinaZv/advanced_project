import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Text>

export const TextWithTitle: Story = {
  args: {
    title: 'Title',
    text: 'Text Text text',
  },
}

export const TextWithTitleSmall: Story = {
  args: {
    title: 'Title',
    text: 'Text Text text',
    size: TextSize.SMALL,
  },
}

export const TextWithTitleMedium: Story = {
  args: {
    title: 'Title',
    text: 'Text Text text',
    size: TextSize.MEDIUM,
  },
}

export const onlyText: Story = {
  args: {
    text: 'Text Text text',
  },
}

export const TextWithoutTitle: Story = {
  args: {
    text: 'Text Text text',
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}

export const TextWithTitleError: Story = {
  args: {
    title: 'Title',
    text: 'Text Text text',
    theme: TextTheme.ERROR,
  },
}
