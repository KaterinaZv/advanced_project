import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'pages/CommentCard',
  component: CommentCard,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Primary: Story = {
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
