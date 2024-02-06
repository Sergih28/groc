import { match } from 'ts-pattern'

import type { PlayPauseButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

import { BUTTON_TEXT } from './constants'

const PlayPauseButton = ({
  hasStarted = false,
  isPaused = true,
  handleClick = () => {},
}: PlayPauseButtonProps) => {
  const buttonText = match({ hasStarted, isPaused })
    .with({ hasStarted: false, isPaused: true }, () => BUTTON_TEXT.START)
    .with({ hasStarted: true, isPaused: false }, () => BUTTON_TEXT.PAUSE)
    .otherwise(() => BUTTON_TEXT.CONTINUE)

  return (
    <Button handleClick={handleClick} styles="button__counter">
      {buttonText}
    </Button>
  )
}

export default PlayPauseButton
