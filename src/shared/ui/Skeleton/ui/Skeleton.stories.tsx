import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
}

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
}
