import type { Meta, StoryObj } from '@storybook/react'

import PlayPauseButton from '../components/ui/atoms/Buttons/PlayPause/index'

const meta: Meta<typeof PlayPauseButton> = {
  component: PlayPauseButton,
  title: 'Button',
}

type Story = StoryObj<typeof PlayPauseButton>

export const PlayButton: Story = {
  args: {
    text: 'Play',
  },
}

export const PauseButton: Story = {
  args: {
    text: 'Pause',
  },
}

export default meta
