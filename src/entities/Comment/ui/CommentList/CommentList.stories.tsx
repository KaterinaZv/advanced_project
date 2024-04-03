import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'pages/CommentList',
  component: CommentList,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof CommentList>

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
