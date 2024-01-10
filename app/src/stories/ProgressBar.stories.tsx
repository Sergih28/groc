import type { Meta, StoryObj } from '@storybook/react'

import ProgressBar from '../components/ui/atoms/ProgressBar/'
import '../styles/index.css'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
}

type Story = StoryObj<typeof ProgressBar>

export const ProgressBarWithPercentage: Story = {
  args: {
    baseValue: 0,
    currentValue: 100,
    targetValue: 100,
    showPercentage: true,
    backgroundColor: 'yellow',
    fillColor: 'blue',
  },
}

export const ProgressBarNoPercentage: Story = {
  args: {
    baseValue: 0,
    currentValue: 45,
    targetValue: 100,
    showPercentage: false,
    backgroundColor: 'red',
    fillColor: 'purple',
  },
}

export default meta
