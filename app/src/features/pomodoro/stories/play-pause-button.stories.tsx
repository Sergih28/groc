import type { Meta, StoryObj } from '@storybook/react'

import PlayPauseButton from '../components/buttons/play-pause-button'

const meta: Meta<typeof PlayPauseButton> = {
  component: PlayPauseButton,
  title: 'Button',
}

type Story = StoryObj<typeof PlayPauseButton>

export const PlayButton: Story = {
  args: {
    isPaused: false,
    hasStarted: true,
  },
}

export const PauseButton: Story = {
  args: {
    isPaused: true,
  },
}

export const StartButton: Story = {
  args: {
    isPaused: true,
    hasStarted: false,
  },
}

export default meta
