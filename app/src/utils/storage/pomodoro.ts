import { type UUID } from 'crypto'

import { $phase, $settings, handleNewId } from '@store/Pomodoro'

import type { PomodoroType } from './types'

import { localStorageItems } from './keys'

const ACTUAL_PHASE_DURATION = $settings.get()[`${$phase.get()}Duration`]

export const getPomodoros = (): PomodoroType[] => {
  const localStorageValue = localStorage.getItem(localStorageItems.pastPomodoros)

  if (null == localStorageValue) return []

  const pastPomodoros = JSON.parse(localStorageValue) as PomodoroType[]

  return pastPomodoros
}

export const getActivePomodoro = (): PomodoroType | null => {
  const localStorageValue = localStorage.getItem(localStorageItems.activePomodoro)

  if (null == localStorageValue) return null

  const activePomodoro = JSON.parse(localStorageValue) as PomodoroType

  return activePomodoro
}

export const getPomodoroById = (id: UUID) => {
  const savedPomodoros = getPomodoros()

  const pomodoro = savedPomodoros.find((pomodoro) => pomodoro.id === id)

  if (undefined == pomodoro) return false

  return pomodoro
}

export const updatePomodoros = (pomodoros: PomodoroType[]) => {
  localStorage.setItem(localStorageItems.pastPomodoros, JSON.stringify(pomodoros))
}

export const updateActivePomodoro = (pomodoro: PomodoroType) => {
  localStorage.setItem(localStorageItems.activePomodoro, JSON.stringify(pomodoro))
}

export const updateLastTick = () => {
  const activePomodoro = getActivePomodoro()

  if (null == activePomodoro) return

  activePomodoro.lastTick = Date.now()

  updateActivePomodoro(activePomodoro)
}

export const generatePomodoro = () => {
  const newPomodoro: PomodoroType = {
    id: crypto.randomUUID(),
    startTime: Date.now(),
    endTime: null,
    pausedTimeRanges: null,
    phase: $phase.get(),
    expectedDuration: ACTUAL_PHASE_DURATION,
    lastTick: Date.now(),
  }

  return newPomodoro
}

export const createActivePomodoro = () => {
  const newPomodoro = generatePomodoro()

  updateActivePomodoro(newPomodoro)
  handleNewId(newPomodoro.id)
}

export const deletePomodoro = (id: UUID) => {
  const savedPomodoros = getPomodoros()
  if (undefined == savedPomodoros) return

  const updatedPomodoros = savedPomodoros.filter((pomodoro) => {
    return pomodoro.id !== id
  })

  updatePomodoros(updatedPomodoros)
}

export const deleteActivePomodoro = () => {
  const savedPomodoros = getPomodoros()

  if (savedPomodoros.length === 0) return

  savedPomodoros.pop()

  updatePomodoros(savedPomodoros)
}

export const isPomodoroFinished = () => {
  const activePomodoro = getActivePomodoro()

  if (null == activePomodoro || null == activePomodoro.endTime) return false

  return true
}

export const startPauseTime = () => {
  const activePomodoro = getActivePomodoro()
  if (null == activePomodoro) return

  const pauseTimes = { start: Date.now(), end: null }

  if (null === activePomodoro.pausedTimeRanges) {
    activePomodoro.pausedTimeRanges = [pauseTimes]
  } else {
    activePomodoro.pausedTimeRanges.push(pauseTimes)
  }

  updateActivePomodoro(activePomodoro)
}

export const endPauseTime = () => {
  const activePomodoro = getActivePomodoro()
  if (null == activePomodoro) return

  if (null === activePomodoro.pausedTimeRanges) return

  activePomodoro.pausedTimeRanges[activePomodoro.pausedTimeRanges.length - 1].end = Date.now()

  updateActivePomodoro(activePomodoro)
}
