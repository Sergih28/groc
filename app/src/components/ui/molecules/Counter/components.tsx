import type { PropsWithChildren } from 'react'

import type { CounterButtonsType, CounterContentType } from './types'

import { pomodoroStore } from '@store/Pomodoro/'

import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'

import TEST_ID from '@data/testIds'

import { BUTTON_TEXT } from './constants'

import './styles.css'

const { handlePause, handleReset } = pomodoroStore.actions

export const Counter = ({ children }: PropsWithChildren) => {
  return <div className="counter">{children}</div>
}

Counter.Content = ({ counterContent }: CounterContentType) => {
  return (
    <span data-testid="counter-content" className="counter__content">
      {counterContent}
    </span>
  )
}

Counter.Buttons = ({ isPaused, counterValue }: CounterButtonsType) => {
  const hasStarted = counterValue > 0
  const buttonText = !hasStarted
    ? BUTTON_TEXT.START
    : isPaused
      ? BUTTON_TEXT.CONTINUE
      : BUTTON_TEXT.PAUSE
  const buttonTestId = !hasStarted
    ? TEST_ID.pomodoro.startButton
    : isPaused
      ? TEST_ID.pomodoro.continueButton
      : TEST_ID.pomodoro.pauseButton

  return (
    <div className="counter__buttons">
      <PlayPauseButton text={buttonText} handleClick={handlePause} testId={buttonTestId} />
      <ResetButton resetPomodoro={handleReset} />
    </div>
  )
}
