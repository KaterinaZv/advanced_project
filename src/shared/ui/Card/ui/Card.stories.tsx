import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Text } from 'shared/ui/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    children: <Text title='Text' text='test test' />,
  },
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
