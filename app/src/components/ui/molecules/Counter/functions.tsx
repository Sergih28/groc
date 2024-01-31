import { pomodoroStore } from '@store/Pomodoro'
import {
  checkLastTick,
  createActivePomodoro,
  getActivePomodoro,
  isPomodoroFinished,
} from '@utils/storage/pomodoro'
import type { PausedTimeRange } from '@utils/storage/types'

export const calculateElapsedTime = (
  startTime: number | null,
  pausedTimeRanges: PausedTimeRange[],
): number => {
  let pausedTime = 0

  if (null === startTime) return 0

  if (pausedTimeRanges.length > 0) {
    pausedTimeRanges.forEach((range) => {
      if (null != range.end) {
        pausedTime += range.end - range.start
      } else {
        pausedTime += Date.now() - range.start
      }
    })
  }

  const currentTime = Date.now()
  const elapsedTime = currentTime - startTime - pausedTime

  return elapsedTime > 0 ? elapsedTime : 0
}

export const loadActivePomodoro = () => {
  if (isPomodoroFinished()) return

  const activePomodoro = getActivePomodoro()

  if (null == activePomodoro) {
    createActivePomodoro()
    return
  }

  checkLastTick(activePomodoro)
  const elapsedTime = calculateElapsedTime(
    activePomodoro.startTime,
    activePomodoro.pausedTimeRanges,
  )
  pomodoroStore.actions.setPomodoroState({
    counterValue: elapsedTime,
    id: activePomodoro.id,
    isPaused: true,
  })

  pomodoroStore.actions.setPomodoroState({ counterValue: elapsedTime, phase: activePomodoro.phase })
}
