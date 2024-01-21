import type { Meta, StoryObj } from '@storybook/react'

import Switch from '../components/ui/atoms/Switch/'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

// FIXME: type
export const OnSwitch: Story | any = {
  args: {
    initialState: true,
    switchLabel: 'Toggle light/dark theme',
  },
}

// FIXME: type
export const OffSwitch: Story | any = {
  args: {
    initialState: false,
    switchLabel: 'Toggle light/dark theme',
  },
}
