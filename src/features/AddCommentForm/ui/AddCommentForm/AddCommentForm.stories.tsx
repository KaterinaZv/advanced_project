import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered',
    initialState: {
      addCommentForm: { text: 'TEdvsdgef;sdfqeef' },
    },
  },
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Primary: Story = {
  args: {
    onSendComment: () => {},
  },
}
