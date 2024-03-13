import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import AvatarImg from '../../../../shared/assets/test/storybook.jpg'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const WithData: Story = {
  args: {
    data: {
      first: 'Avel',
      lastname: 'Hugo',
      age: 22,
      avatar: AvatarImg,
    },
  },
}

export const Readonly: Story = {
  args: {
    data: {
      first: 'Avel',
      lastname: 'Hugo',
      age: 22,
      avatar: AvatarImg,
    },
    readonly: true,
  },
}

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const WithErrors: Story = {
  args: {
    error: 'Error',
  },
}
