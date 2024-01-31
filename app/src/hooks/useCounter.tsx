import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro'
import { createActivePomodoro, updateLastTick } from '@utils/storage/pomodoro'
import { accurateTimer } from '@utils/time'

export default function useCounter() {
  const { id, counterValue, isPaused, phase } = useStore(pomodoroStore.state)
  const hasStarted = counterValue > 0
  const isFinished = counterValue >= pomodoroStore.actions.getPhaseDuration(phase)

  useEffect(() => {
    if (!hasStarted || null != id) return

    createActivePomodoro()
  }, [hasStarted])

  useEffect(() => {
    const timer = accurateTimer(() => {
      if (isPaused || isFinished) return
      const counterValue = pomodoroStore.state.get().counterValue
      const newCounterValue = counterValue + 100
      pomodoroStore.actions.setPomodoroState({ counterValue: newCounterValue })

      updateLastTick()
    }, 100)

    return () => timer.cancel()
  }, [isPaused, counterValue, phase])
}
