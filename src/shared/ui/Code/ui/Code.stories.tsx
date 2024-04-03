import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Code>

export const Primary: Story = {
  args: {
    text: `const meta: Meta<typeof Code> = {
      title: 'shared/Code',
      component: Code,
      parameters: {},
    }
    `,
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
