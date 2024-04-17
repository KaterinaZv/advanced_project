import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Page>

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
