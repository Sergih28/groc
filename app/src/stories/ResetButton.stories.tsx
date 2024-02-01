import type { Meta, StoryObj } from '@storybook/react'

import ResetButton from '../components/ui/atoms/Buttons/Reset/index'

const meta: Meta<typeof ResetButton> = {
  component: ResetButton,
  title: 'Button',
}

type Story = StoryObj<typeof ResetButton>

export const Button: Story = {
  args: {
    resetPomodoro: () => console.log('pomodoro reset'),
  },
}

export default meta
