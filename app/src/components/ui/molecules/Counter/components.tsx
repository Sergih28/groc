import type { PropsWithChildren } from 'react'

import type { CounterButtonsType, CounterContentType } from './types'

import { pomodoroStore } from '@store/Pomodoro/'

import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'

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
  return (
    <div className="counter__buttons">
      <PlayPauseButton
        hasStarted={counterValue > 0}
        handleClick={handlePause}
        isPaused={isPaused}
      />
      <ResetButton resetPomodoro={handleReset} />
    </div>
  )
}
