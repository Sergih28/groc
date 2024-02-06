import type { Meta, StoryObj } from '@storybook/react'

import NavBar from './components'

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'NavBar',
}

type Story = StoryObj<typeof NavBar>

export const MainNavBar: Story = {}

export default meta
