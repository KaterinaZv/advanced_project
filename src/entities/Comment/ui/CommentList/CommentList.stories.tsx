import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Primary: Story = {
  args: {
    comments: [
      {
        text: 'Sfrretoc dgkegtkdbe ergert',
        user: { id: '1', username: 'First user' },
        id: '1',
      },
      {
        text: 'cvadfwdfwdsdfefw',
        user: { id: '2', username: 'Second user' },
        id: '2',
      },
    ],
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const DarkWithoutComments: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}
