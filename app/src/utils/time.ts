import type { PausedTimeRange } from './storage/types'

export const accurateTimer = (fn: () => void, time = 100) => {
  let nextAt: number
  let timeout: NodeJS.Timeout

  nextAt = new Date().getTime() + time

  const wrapper = () => {
    nextAt += time

    timeout = setTimeout(wrapper, nextAt - new Date().getTime())

    fn()
  }

  const cancel = () => clearTimeout(timeout)

  timeout = setTimeout(wrapper, nextAt - new Date().getTime())

  return { cancel }
}

export const calculateElapsedTime = (
  startTime: number | null,
  pausedTimeRanges: PausedTimeRange[],
): number => {
  let pausedTime = 0
  const now = Date.now()

  if (null === startTime) return 0

  if (pausedTimeRanges.length > 0) {
    pausedTimeRanges.forEach((range) => {
      if (null != range.end) {
        pausedTime += range.end - range.start
      } else {
        pausedTime += now - range.start
      }
    })
  }

  const currentTime = Date.now()
  const elapsedTime = currentTime - startTime - pausedTime

  return elapsedTime > 0 ? elapsedTime : 0
}
