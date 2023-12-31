import ResetButton from '../components/ResetButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ResetButton> = {
  component: ResetButton,
}

type Story = StoryObj<typeof ResetButton>

export const Button: Story = {
  args: {
    // eslint-disable-next-line no-console
    resetPomodoro: () => console.log('pomodoro reset'),
  },
}

export default meta
