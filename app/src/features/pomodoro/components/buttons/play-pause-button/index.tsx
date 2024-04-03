import { useStore } from '@nanostores/react'
import { match } from 'ts-pattern'
// @ts-expect-error There are no types for this dependency
import useSound from 'use-sound'

import type { PlayPauseButtonProps } from '../types'

import { Button } from '@components/elements/button'

import { pomodoroStore } from '@store/pomodoro'

/*Sounds effects sourced from: https://pixabay.com/sound-effects/interface-124464/ 
and https://pixabay.com/sound-effects/button-124476/ respectively**/
import pauseSound from '@assets/pause-sound.mp3'
import playSound from '@assets/play-sound.mp3'

import { BUTTON_TEXT } from './constants'

const PlayPauseButton = ({
  hasStarted = false,
  isPaused = true,
  handleClick = () => {},
}: PlayPauseButtonProps) => {
  const { sound } = useStore(pomodoroStore.state)
  const { buttonText, audioFile } = match({ hasStarted, isPaused })
    .with({ hasStarted: false, isPaused: true }, () => {
      return { buttonText: BUTTON_TEXT.START, audioFile: playSound }
    })
    .with({ hasStarted: true, isPaused: true }, () => {
      return { buttonText: BUTTON_TEXT.CONTINUE, audioFile: playSound }
    })
    .otherwise(() => {
      return {
        buttonText: BUTTON_TEXT.PAUSE,
        audioFile: pauseSound,
      }
    })

  const [play] = useSound(audioFile, { volume: sound ? 0.5 : 0 })

  const onClick = () => {
    handleClick()
    play()
  }

  return <Button {...{ onClick }}>{buttonText}</Button>
}

export default PlayPauseButton
