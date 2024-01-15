import { type UUID } from 'crypto'

import type { PomodoroType } from './types'

import { localStorageItems } from './keys'
import { $phase, $settings } from '@store/Pomodoro'

export const getPomodoros = (): PomodoroType[] => {
  const localStorageValue = localStorage.getItem(localStorageItems.pomodoro)

  if (null == localStorageValue) return []

  const pomodoros = JSON.parse(localStorageValue)

  return pomodoros
}

export const getLastPomodoro = () => {
  const savedPomodoros = getPomodoros()

  if (savedPomodoros.length === 0) return null

  return savedPomodoros[savedPomodoros.length - 1]
}

export const getPomodoroById = (id: UUID) => {
  const savedPomodoros = getPomodoros()

  const pomodoro = savedPomodoros.find((pomodoro) => pomodoro.id === id)

  if (undefined == pomodoro) return false

  return pomodoro
}

export const updatePomodoros = (pomodoros: PomodoroType[]) => {
  localStorage.setItem(localStorageItems.pomodoro, JSON.stringify(pomodoros))
}

export const generatePomodoro = () => {
  const newPomodoro: PomodoroType = {
    id: crypto.randomUUID(),
    startTime: Date.now(),
    endTime: null,
    pausedTimeRanges: null,
    phase: $phase.get(),
    expectedDuration: $settings.get()[`${$phase.get()}Duration`],
  }

  return newPomodoro
}

export const createPomodoro = (pomodoro: PomodoroType) => {
  const updatedPomodoros = [...getPomodoros(), pomodoro]

  updatePomodoros(updatedPomodoros)

  return { id: pomodoro.id }
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
  const savedPomodoros = getPomodoros()

  if (savedPomodoros.length === 0 || null == savedPomodoros[savedPomodoros.length - 1].endTime)
    return false

  return true
}

export const updatePomodoroTime = (id: UUID) => {
  const pomodoro = getPomodoroById(id)
  if (!pomodoro) return

  if (null === pomodoro.pausedTimeRanges) {
    pomodoro.pausedTimeRanges = [{ start: Date.now(), end: null }]
  }

  pomodoro.pausedTimeRanges[pomodoro.pausedTimeRanges.length - 1].start = Date.now()

  const savedPomodoros = getPomodoros()
  const newPomodoros = savedPomodoros.map((storedPomodoro) =>
    storedPomodoro.id !== id ? storedPomodoro : pomodoro,
  )

  updatePomodoros(newPomodoros)
}

export const startPauseTime = (id: UUID) => {
  const pomodoro = getPomodoroById(id)
  if (!pomodoro) return

  const pauseTimes = { start: Date.now(), end: null }

  if (null === pomodoro.pausedTimeRanges) {
    pomodoro.pausedTimeRanges = [pauseTimes]
  } else {
    pomodoro.pausedTimeRanges.push(pauseTimes)
  }

  const savedPomodoros = getPomodoros()
  const newPomodoros = savedPomodoros.map((storedPomodoro) =>
    storedPomodoro.id !== id ? storedPomodoro : pomodoro,
  )

  updatePomodoros(newPomodoros)
}

export const endPauseTime = (id: UUID) => {
  const pomodoro = getPomodoroById(id)
  if (!pomodoro) return

  if (null === pomodoro.pausedTimeRanges) return

  pomodoro.pausedTimeRanges[pomodoro.pausedTimeRanges.length - 1].end = Date.now()

  const savedPomodoros = getPomodoros()
  const newPomodoros = savedPomodoros.map((storedPomodoro) =>
    storedPomodoro.id !== id ? storedPomodoro : pomodoro,
  )

  updatePomodoros(newPomodoros)
}
