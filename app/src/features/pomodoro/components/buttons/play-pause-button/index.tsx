import { match } from 'ts-pattern'

import type { PlayPauseButtonProps } from '../types'

import { Button } from '@components/elements/button'

import { BUTTON_TEXT } from './constants'

const PlayPauseButton = ({
  hasStarted = false,
  isPaused = true,
  handleClick = () => {},
}: PlayPauseButtonProps) => {
  const buttonText = match({ hasStarted, isPaused })
    .with({ hasStarted: false, isPaused: true }, () => BUTTON_TEXT.START)
    .with({ hasStarted: true, isPaused: true }, () => BUTTON_TEXT.CONTINUE)
    .otherwise(() => BUTTON_TEXT.PAUSE)

  return (
    <Button onClick={handleClick} className="">
      {buttonText}
    </Button>
  )
}

export default PlayPauseButton
