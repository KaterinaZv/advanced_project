import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { [FTName] } from './[FTName]';

const meta: Meta<typeof [FTName] > = {
  title: 'pages/[FTName]',
  component: [FTName] ,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof [FTName]>

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

