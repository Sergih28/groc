import type { UUID } from 'crypto'

import { loadActivePomodoro } from '@components/ui/molecules/Counter/functions'
import { DEFAULT_STATE_VALUES } from '@store/constants'
import type { PhaseType, StateType } from '@store/types'
import {
  createActivePomodoro,
  endPauseTime,
  setActivePomodoroStartTime,
  startPauseTime,
} from '@utils/storage/pomodoro'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { action } from 'nanostores'

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

    const keysToCheck = ['counterValue', 'phase', 'isPaused']
    const shouldUpdateCounterContent = keysToCheck.some((key) => Object.keys(values).includes(key))

    if (!shouldUpdateCounterContent) return

    const newCounterContent = generateCounterContent()

    store.setKey('counterContent', newCounterContent)
  },
)

const generateCounterContent = () => {
  const state = $state.get()
  const seconds = state[`${state.phase}Duration`]
  const calculatedCounter = state.isCountingUp ? state.counterValue : seconds - state.counterValue

  if (state.counterFormat === 'seconds') return calculatedCounter.toString()

  return dayjs.duration(calculatedCounter, 'seconds').format('mm:ss')
}

export const getPhaseDuration = (phase: PhaseType) => {
  return $state.get()[`${phase}Duration`]
}

export const handlePause = () => {
  const { isPaused, counterValue, phase } = $state.get()

  const seconds = getPhaseDuration(phase)

  const isFinished = counterValue >= seconds
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

export const resetStore = () => {
  setPomodoroState(DEFAULT_STATE_VALUES)
}
