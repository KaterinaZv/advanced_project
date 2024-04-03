import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleDetails } from './ArticleDetails'

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof ArticleDetails>

export const Primary: Story = {
  args: {
    id: '1',
  },
}

export const Dark: Story = {
  args: {
    id: '1',
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}
