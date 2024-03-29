import type { Meta, StoryObj } from '@storybook/react'

import Settings from '../components/settings'

const meta: Meta<typeof Settings> = {
  component: Settings,
  title: 'Settings',
}

type Story = StoryObj<typeof Settings>

export const DefaultSettings: Story = {}

export default meta
