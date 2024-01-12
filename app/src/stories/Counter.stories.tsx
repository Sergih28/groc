import type { Meta, StoryObj } from '@storybook/react'

import Counter from '../components/ui/molecules/Counter'
import '../styles/index.css'

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: 'Counter',
}
export default meta

type Story = StoryObj<typeof Counter>

export const CountDown: Story = {
  args: {
    seconds: 20,
    isCountingUp: false,
    counterFormat: 'seconds',
    countingInterval: 1,
  },
}

export const CountUp: Story = {
  args: {
    seconds: 60,
    isCountingUp: true,
    counterFormat: 'minutes',
    countingInterval: 5,
  },
}
