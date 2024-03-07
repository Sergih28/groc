import { type PropsWithChildren } from 'react'

import type { CounterButtonsType, CounterContentType } from './types'

import useGetAnimatedCounterContent from '@features/pomodoro/hooks/use-get-animated-counter-content'

import { Card, CardContent } from '@components/elements/card'

import { pomodoroStore } from '@store/pomodoro'

import PlayPauseButton from '../buttons/play-pause-button'
import ResetButton from '../buttons/reset-button'

const { handlePause, handleReset } = pomodoroStore.actions

export const Counter = ({ children }: PropsWithChildren) => {
  return <Card className="counter">{children}</Card>
}

Counter.Content = ({ counterContent }: CounterContentType) => {
  const { animatedCounter } = useGetAnimatedCounterContent(counterContent)
  return (
    <CardContent data-testid="counter-content" className="counter__content">
      {animatedCounter()}
    </CardContent>
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
