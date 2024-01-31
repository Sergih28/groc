import type { UUID } from 'crypto'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { action } from 'nanostores'

import $state from './state'
import { loadActivePomodoro } from '@components/ui/molecules/Counter/functions'
import type { PhaseType, StateType } from '@store/types'
import { calculateSecondsFromMilliseconds } from '@utils/numbers'
import {
  createActivePomodoro,
  endPauseTime,
  setActivePomodoroStartTime,
  startPauseTime,
} from '@utils/storage/pomodoro'

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

  const milliseconds = getPhaseDuration(state.phase)
  const calculatedCounter = state.isCountingUp
    ? state.counterValue
    : milliseconds - state.counterValue

  if (state.counterFormat === 'seconds')
    return Math.round(calculateSecondsFromMilliseconds(calculatedCounter)).toString()

  return dayjs.duration(calculatedCounter, 'milliseconds').format('mm:ss')
}

export const getPhaseDuration = (phase: PhaseType) => {
  return $state.get()[`${phase}Duration`]
}

export const handlePause = () => {
  const { isPaused, counterValue, phase } = $state.get()

  const milliseconds = getPhaseDuration(phase)

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
