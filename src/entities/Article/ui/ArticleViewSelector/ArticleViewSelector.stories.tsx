import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleViewSelector } from './ArticleViewSelector'

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'pages/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof ArticleViewSelector>

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
