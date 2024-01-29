import type { Meta, StoryObj } from '@storybook/react'

import PlayPauseButton from '../components/ui/atoms/Buttons/PlayPause/index'

const meta: Meta<typeof PlayPauseButton> = {
  component: PlayPauseButton,
}

type Story = StoryObj<typeof PlayPauseButton>

// FIXME: type
export const PlayButton: Story = {
  args: {
    text: 'Play',
  },
}

// FIXME: type
export const PauseButton: Story = {
  args: {
    text: 'Pause',
  },
}

export default meta
