import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro'
import { createActivePomodoro, updateLastTick } from '@utils/storage/pomodoro'

export const calculateCounter = (prevCounter: number, countingInterval: number) => {
  return prevCounter + countingInterval
}

export default function useCounter() {
  const { id, counterValue, countingInterval, isPaused, phase } = useStore(pomodoroStore.state)
  const hasStarted = counterValue > 0
  const isFinished = counterValue >= pomodoroStore.actions.getPhaseDuration(phase)

  useEffect(() => {
    if (!hasStarted || null != id) return

    createActivePomodoro()
  }, [hasStarted])

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused || isFinished) return
      const counterValue = pomodoroStore.state.get().counterValue
      const newCounterValue = calculateCounter(counterValue, countingInterval)

      pomodoroStore.actions.setPomodoroState({ counterValue: newCounterValue })

      updateLastTick()
    }, countingInterval * 1000)

    return () => clearInterval(timer)
  }, [isPaused, counterValue, phase])
}
