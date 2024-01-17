import { updateCounter, updatePhase } from '@store/Pomodoro'
import { calculateSecondsFromMilliseconds } from '@utils/numbers'
import { getActivePomodoro, isPomodoroFinished } from '@utils/storage/pomodoro'
import type { PausedTimeRange } from '@utils/storage/types'

export const calculateElapsedTime = (
  startTime: number,
  pausedTimeRanges: PausedTimeRange[] | null,
): number => {
  let pausedTime = 0

  if (null != pausedTimeRanges && pausedTimeRanges.length > 0) {
    pausedTimeRanges.forEach((range) => {
      if (null != range.end) {
        pausedTime += range.end - range.start
      } else {
        pausedTime += Date.now() - range.start
      }
    })
  }

  const currentTime = calculateSecondsFromMilliseconds(Date.now())
  const elapsedTime = Math.round(
    currentTime -
      calculateSecondsFromMilliseconds(startTime) -
      calculateSecondsFromMilliseconds(pausedTime),
  )

  return elapsedTime > 0 ? elapsedTime : 0
}

export const checkLastPomodoro = () => {
  if (isPomodoroFinished()) return

  const activePomodoro = getActivePomodoro()

  if (null == activePomodoro) return

  const elapsedTime = calculateElapsedTime(
    activePomodoro.startTime,
    activePomodoro.pausedTimeRanges,
  )

  updateCounter({ counterValue: elapsedTime, id: activePomodoro.id })

  updatePhase(activePomodoro.phase)
}