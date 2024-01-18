import Button from '@atoms/Buttons/Button/'

import type { PlayPauseButtonProps } from './types'

import { DEFAULT_TEXT } from './constants'

const PlayPauseButton = ({ text = DEFAULT_TEXT, handleClick = () => {} }: PlayPauseButtonProps) => {
  return (
    <>
      <Button handleClick={handleClick} styles="counter">
        {text}
      </Button>
    </>
  )
}

export default PlayPauseButton
