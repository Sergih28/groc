import { type UUID } from 'crypto'

import type { PausedTimeRange, PomodoroType, SavedPomodoroType } from './types'

import { localStorageItems } from './keys'
import { pomodoroStore } from '@store/Pomodoro'
import { loadActivePomodoro } from '@molecules/Counter/functions'

export const getPomodoros = (): SavedPomodoroType[] => {
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

  if (null == pomodoro) return false

  return pomodoro
}

export const updatePomodoros = (pomodoros: SavedPomodoroType[]) => {
  localStorage.setItem(localStorageItems.pastPomodoros, JSON.stringify(pomodoros))
}

export const addSavedPomodoro = (pomodoro: SavedPomodoroType) => {
  const updatedSavedPomodoros = [...getPomodoros(), pomodoro]

  updatePomodoros(updatedSavedPomodoros)
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
  const ACTUAL_PHASE_DURATION = pomodoroStore.actions.getPhaseDuration('pomodoro')

  const newPomodoro: PomodoroType = {
    id: crypto.randomUUID(),
    startTime: null,
    endTime: null,
    pausedTimeRanges: [],
    phase: pomodoroStore.state.get().phase,
    expectedDuration: ACTUAL_PHASE_DURATION,
    lastTick: Date.now(),
  }

  return newPomodoro
}

export const createActivePomodoro = () => {
  const newPomodoro = generatePomodoro()

  updateActivePomodoro(newPomodoro)
  pomodoroStore.actions.handleNewId(newPomodoro.id)
  loadActivePomodoro()
}

export const deletePomodoro = (id: UUID) => {
  const savedPomodoros = getPomodoros()
  if (undefined == savedPomodoros) return

  const updatedPomodoros = savedPomodoros.filter((pomodoro) => {
    return pomodoro.id !== id
  })

  updatePomodoros(updatedPomodoros)
}

export const startPauseTime = () => {
  const activePomodoro = getActivePomodoro()
  if (null == activePomodoro) return

  const pauseTimes = { start: Date.now(), end: null }

  if (0 === activePomodoro.pausedTimeRanges.length) {
    activePomodoro.pausedTimeRanges = [pauseTimes]
  } else {
    activePomodoro.pausedTimeRanges.push(pauseTimes)
  }

  updateActivePomodoro(activePomodoro)
}

export const endPauseTime = () => {
  const activePomodoro = getActivePomodoro()
  if (null == activePomodoro) return

  if (0 === activePomodoro.pausedTimeRanges.length) return

  activePomodoro.pausedTimeRanges[activePomodoro.pausedTimeRanges.length - 1].end = Date.now()

  updateActivePomodoro(activePomodoro)
}

export const setActivePomodoroStartTime = () => {
  const activePomoro = getActivePomodoro()

  if (null == activePomoro) return

  activePomoro.startTime = Date.now()

  updateActivePomodoro(activePomoro)
}

export const checkLastTick = (activePomodoro: PomodoroType) => {
  const hasStarted = null == activePomodoro.startTime
  const isLastTickPreviousToNow = activePomodoro.lastTick < Date.now()

  if (!hasStarted && isLastTickPreviousToNow) {
    const newPause: PausedTimeRange = { start: activePomodoro.lastTick, end: null }
    const hasBeenPaused = 0 !== activePomodoro.pausedTimeRanges.length
    const isLastPauseFinished =
      hasBeenPaused &&
      null !== activePomodoro.pausedTimeRanges[activePomodoro.pausedTimeRanges.length - 1].end

    if (!hasBeenPaused || isLastPauseFinished) {
      activePomodoro.pausedTimeRanges.push(newPause)
    }
  }
  updateActivePomodoro(activePomodoro)
}

export const saveFinishedPomodoro = () => {
  const activePomodoro = getActivePomodoro()

  if (null == activePomodoro) return

  const savedPomodoro: SavedPomodoroType = {
    id: activePomodoro.id,
    startTime: activePomodoro.startTime,
    endTime: Date.now(),
    expectedDuration: activePomodoro.expectedDuration,
    pausedTimeRanges: activePomodoro.pausedTimeRanges,
    phase: activePomodoro.phase,
  }

  addSavedPomodoro(savedPomodoro)
}

export const nextPomodoro = () => {
  saveFinishedPomodoro()
}
