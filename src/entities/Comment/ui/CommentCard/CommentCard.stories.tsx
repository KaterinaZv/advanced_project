import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'entities/CommentCard',
  component: CommentCard,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Primary: Story = {
  args: {
    comment: {
      text: 'Sfrretoc dgkegtkdbe ergert',
      user: { id: '1', username: 'svssd' },
      id: '1',
    },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Dark: Story = {
  args: {
    comment: {
      text: 'Sfrretoc dgkegtkdbe ergert',
      user: { id: '1', username: 'svssd' },
      id: '1',
    },
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}
