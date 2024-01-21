import type { Meta, StoryObj } from '@storybook/react'

import PlayPauseButton from '../components/ui/atoms/Buttons/PlayPause/index'

const meta: Meta<typeof PlayPauseButton> = {
  component: PlayPauseButton,
}

type Story = StoryObj<typeof PlayPauseButton>

// FIXME: type
export const PlayButton: Story | any = {
  args: {
    initialState: true,
  },
}

// FIXME: type
export const PauseButton: Story | any = {
  args: {
    initialState: false,
  },
}

export default meta
