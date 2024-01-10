import type { Meta, StoryObj } from '@storybook/react'

import NextButton from '../components/ui/atoms/Buttons/Next'

const meta: Meta<typeof NextButton> = {
  component: NextButton,
}

type Story = StoryObj<typeof NextButton>

export const Next: Story = {
  args: {
    // eslint-disable-next-line no-console
    nextPomodoro: () => console.log('next pomodoro'),
  },
}

export default meta
