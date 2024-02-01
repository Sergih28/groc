import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro'
import { loadActivePomodoro, updateLastTick } from '@utils/storage/pomodoro'
import { accurateTimer } from '@utils/time'

export default function useCounter() {
  const { counterValue, isPaused, phase } = useStore(pomodoroStore.state)
  const isFinished = counterValue >= pomodoroStore.actions.getPhaseDuration()

  useEffect(function load() {
    loadActivePomodoro()
  }, [])

  useEffect(
    function updateCounter() {
      const timer = accurateTimer(() => {
        if (isPaused || isFinished) return
        const counterValue = pomodoroStore.state.get().counterValue
        const newCounterValue = counterValue + 100
        pomodoroStore.actions.setPomodoroState({ counterValue: newCounterValue })

        updateLastTick()
      }, 100)

      return () => timer.cancel()
    },
    [isPaused, counterValue, phase],
  )
}
