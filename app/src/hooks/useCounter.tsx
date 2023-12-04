import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const DEFAULT_VALUES = {
  COUNTER_START: 0,
  COUNTING_INTERVAL: 1,
} as const

export const calculateCounter = (
  prevCounter: number,
  seconds: number,
  isIncrementing: boolean,
  countingInterval: number,
) => {
  if (isIncrementing) {
    return prevCounter < seconds ? prevCounter + countingInterval : seconds
  }

  return prevCounter > 0 ? prevCounter - countingInterval : 0
}

type COUNTER_FORMAT_TYPE = 'minutes' | 'seconds'

export default function useCounter(
  seconds: number,
  isCountingUp: boolean,
  counterFormat: COUNTER_FORMAT_TYPE = 'minutes',
  countingInterval: number = DEFAULT_VALUES.COUNTING_INTERVAL,
) {
  const [counterValue, setCounterValue] = useState(
    isCountingUp ? DEFAULT_VALUES.COUNTER_START : seconds,
  )
  const [isPaused, setIsPaused] = useState(false)

  const FORMATS = {
    seconds: `${counterValue}`,
    minutes: dayjs.duration(counterValue, 'seconds').format('mm:ss'),
  }

  const isFinished =
    (!isCountingUp && counterValue === 0) || (isCountingUp && counterValue === seconds)

  const counterContent = FORMATS[counterFormat]

  const handlePause = () => {
    if (isFinished) return
    setIsPaused((isPaused) => !isPaused)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused || isFinished) return

      setCounterValue((prevCounter) => {
        return calculateCounter(prevCounter, seconds, isCountingUp, countingInterval)
      })
    }, countingInterval * 1000)

    return () => clearInterval(timer)
  }, [isCountingUp, seconds, isPaused])

  return { counterValue, counterContent, handlePause, isPaused, isFinished }
}
