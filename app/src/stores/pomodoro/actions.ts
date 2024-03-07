import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { action } from 'nanostores'

import type { PhaseType, StateType } from './types'
import type { UUID } from 'crypto'

import { loadActivePomodoro } from '@features/pomodoro/services/local-storage/pomodoro'
import {
  createActivePomodoro,
  endPauseTime,
  setActivePomodoroStartTime,
  startPauseTime,
} from '@features/pomodoro/services/local-storage/pomodoro'

import { calculateSecondsFromMilliseconds } from '@utils/numbers'

import $state from './state'

dayjs.extend(duration)

export const setPomodoroState = action(
  $state,
  'setPomodoroState',
  (store, values: Partial<StateType>) => {
    for (const key in values) {
      store.setKey(
        key as keyof StateType,
        values[key as keyof StateType] as StateType[keyof StateType],
      )
    }

    const keysToCheck = [
      'counterValue',
      'phase',
      'pomodoroDuration',
      'breakDuration',
      'longBreakDuration',
      'counterFormat',
    ]
    const shouldUpdateCounterContent = keysToCheck.some((key) => Object.keys(values).includes(key))

    if (!shouldUpdateCounterContent) return

    const newCounterContent = generateCounterContent()

    if (newCounterContent === $state.get().counterContent) return
    store.setKey('counterContent', newCounterContent)
  },
)

const generateCounterContent = () => {
  const state = $state.get()

  const milliseconds = getPhaseDuration()
  const calculatedCounter = state.isCountingUp
    ? state.counterValue
    : milliseconds - state.counterValue

  if (state.counterFormat === 'seconds')
    return Math.round(calculateSecondsFromMilliseconds(calculatedCounter)).toString()

  return dayjs.duration(calculatedCounter, 'milliseconds').format('mm:ss')
}

export const getPhaseDuration = () => {
  const phase = $state.get().phase

  return $state.get()[`${phase}Duration`]
}

export const handlePause = () => {
  const { isPaused, counterValue } = $state.get()

  const milliseconds = getPhaseDuration()

  const isFinished = counterValue >= milliseconds
  const hasStarted = counterValue > 0

  if (isFinished) return

  if (!hasStarted) {
    setActivePomodoroStartTime()
  }

  if (!isPaused) {
    startPauseTime()
  } else {
    endPauseTime()
  }

  setPomodoroState({ isPaused: !isPaused })
}

export const handleReset = () => {
  createActivePomodoro()
  loadActivePomodoro()
}

export const handlePhase = (phase: PhaseType) => {
  setPomodoroState({ phase })
  handleReset()
}

export const handleNewId = (newId: UUID) => {
  $state.setKey('id', newId)
}
