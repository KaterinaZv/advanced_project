import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  parameters: {},
  args: {},
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1234', content: 'First option' },
      { value: '14', content: 'Second option' },
      { value: '1', content: 'Third option' },
    ],
  },
}
