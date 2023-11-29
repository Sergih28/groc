import type { Meta, StoryObj } from '@storybook/react'
import Switch from '../components/Switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const OnSwitch: Story = {
  args: {
    initialState: true,
    switchLabel: 'Toggle light/dark theme',
  },
}

export const OffSwitch: Story = {
  args: {
    initialState: false,
    switchLabel: 'Toggle light/dark theme',
  },
}
