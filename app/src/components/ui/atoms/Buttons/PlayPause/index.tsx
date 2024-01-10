import type { PlayPauseButtonProps } from './types'

import { PLAYPAUSE_BUTTON_TEXT } from './constants'
import Button from '@atoms/Buttons/Button/'

const PlayPauseButton = ({ isPaused, handleClick = () => {} }: PlayPauseButtonProps) => {
  return (
    <>
      <Button handleClick={handleClick}>
        {isPaused ? PLAYPAUSE_BUTTON_TEXT.CONTINUE : PLAYPAUSE_BUTTON_TEXT.PAUSE}
      </Button>
    </>
  )
}

export default PlayPauseButton
