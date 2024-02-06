import type { Meta, StoryObj } from '@storybook/react'

import NextButton from '../components/buttons/next-button'

const meta: Meta<typeof NextButton> = {
  component: NextButton,
  title: 'Button',
}

type Story = StoryObj<typeof NextButton>

export const Next: Story = {
  args: {
    nextPomodoro: () => console.log('next pomodoro'),
  },
}

export default meta
