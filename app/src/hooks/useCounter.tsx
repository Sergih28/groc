import { useEffect } from 'react'

import { useStore } from '@nanostores/react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { loadActivePomodoro } from '@components/ui/molecules/Counter/functions'
import { $counter, $phase, $settings, setCounterValues, updatePhase } from '@store/Pomodoro'
import type { PhaseType } from '@store/types'
import {
  createActivePomodoro,
  endPauseTime,
  nextPomodoro,
  setActivePomodoroStartTime,
  startPauseTime,
  updateLastTick,
} from '@utils/storage/pomodoro'

dayjs.extend(duration)

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

    if (!hasStarted) {
      setActivePomodoroStartTime()
    }

    setCounterValues({ isPaused: !isPaused })
    if (!isPaused) {
      startPauseTime()
    } else {
      endPauseTime()
    }
  }

  const handleReset = () => {
    createActivePomodoro()
    loadActivePomodoro()
  }

  const handlePhase = (phase: PhaseType) => {
    updatePhase(phase)
    handleReset()
  }

  useEffect(() => {
    setCounterValues({ handlePause, handleReset, handlePhase })
  }, [])

  useEffect(() => {
    if (!hasStarted || null != id) return

    createActivePomodoro()
  }, [hasStarted])

  useEffect(() => {
    if (!isFinished) return
    nextPomodoro()
  }, [isFinished])

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused || isFinished) return

      const newCounterValue = calculateCounter(counterValue, countingInterval)

      setCounterValues({ counterValue: newCounterValue })
      updateLastTick()
    }, countingInterval * 1000)

    setCounterValues({ counterValue, counterContent, handlePause, handleReset })

    return () => clearInterval(timer)
  }, [isPaused, counterValue, phase])
}
