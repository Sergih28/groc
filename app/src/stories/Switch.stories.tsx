import type { Meta, StoryObj } from '@storybook/react'

import Switch from '../components/ui/atoms/Switch/'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const OnSwitch: Story = {
  args: {
    isOn: true,
    switchLabel: 'Toggle light/dark theme',
  },
}

export const OffSwitch: Story = {
  args: {
    isOn: false,
    switchLabel: 'Toggle light/dark theme',
  },
}
