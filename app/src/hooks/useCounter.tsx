import { useEffect } from 'react'

import { useStore } from '@nanostores/react'
import { $counter, $phase, $settings, updateCounter } from '@store/Pomodoro'
import {
  createActivePomodoro,
  endPauseTime,
  startPauseTime,
  updateLastTick,
} from '@utils/storage/pomodoro'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const DEFAULT_VALUES = {
  COUNTER_START: 0,
  COUNTING_INTERVAL: 1,
} as const

export const calculateCounter = (prevCounter: number, countingInterval: number) => {
  return prevCounter + countingInterval
}

export default function useCounter() {
  const counter = useStore($counter)
  const { id, counterValue, isPaused } = counter
  const phase = useStore($phase)
  const settings = useStore($settings)
  const seconds = settings[`${phase}Duration`]
  const { isCountingUp, countingInterval, counterFormat } = settings

  const calculatedCounter = isCountingUp ? counterValue : seconds - counterValue
  const hasStarted = counterValue > 0
  const FORMATS = {
    seconds: `${calculatedCounter}`,
    minutes: dayjs.duration(calculatedCounter, 'seconds').format('mm:ss'),
  }
  const isFinished = counterValue === seconds
  const counterContent = FORMATS[counterFormat]

  const handlePause = () => {
    if (isFinished) return

    updateCounter({ isPaused: !isPaused })
    if (!isPaused) {
      startPauseTime()
    } else {
      endPauseTime()
    }
  }

  const handleReset = () => {
    updateCounter({ counterValue: DEFAULT_VALUES.COUNTER_START, isPaused: true })
    createActivePomodoro()
  }

  useEffect(() => {
    updateCounter({ handlePause, handleReset })
  }, [])

  useEffect(() => {
    if (!hasStarted || null != id) return

    createActivePomodoro()
  }, [hasStarted])

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused || isFinished) return
      const newCounterValue = calculateCounter(counterValue, countingInterval)

      updateCounter({ counterValue: newCounterValue })
    }, countingInterval * 1000)

    updateCounter({ counterValue, counterContent, handlePause, handleReset })
    updateLastTick()
    return () => clearInterval(timer)
  }, [isPaused, counterValue, phase])

  useEffect(() => {
    handleReset()
  }, [phase])
}
