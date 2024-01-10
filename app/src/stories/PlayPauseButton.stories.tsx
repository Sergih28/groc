import type { Meta, StoryObj } from '@storybook/react'

import PlayPauseButton from '../components/ui/atoms/Buttons/PlayPause/index'

const meta: Meta<typeof PlayPauseButton> = {
  component: PlayPauseButton,
}

type Story = StoryObj<typeof PlayPauseButton>

export const PlayButton: Story = {
  args: {
    initialState: true,
  },
}

export const PauseButton: Story = {
  args: {
    initialState: false,
  },
}

export default meta
