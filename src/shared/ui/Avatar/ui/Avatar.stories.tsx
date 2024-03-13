import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '../../../assets/test/storybook.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {},
  args: {},
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    src: AvatarImg,
    size: 50,
  },
}
