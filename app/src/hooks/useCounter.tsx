import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import { loadActivePomodoro, updateLastTick } from '@utils/storage/pomodoro'
import { accurateTimer } from '@utils/time'

import { pomodoroStore } from '@store/Pomodoro/'

const REFRESH_INTERVAL_MS = 100

const useCounter = () => {
  const { counterValue, isPaused, phase } = useStore(pomodoroStore.state)
  const isFinished = counterValue >= pomodoroStore.actions.getPhaseDuration()

  useEffect(function onLoad() {
    loadActivePomodoro()
  }, [])

  useEffect(
    function updateCounter() {
      const timer = accurateTimer(() => {
        if (isPaused || isFinished) return
        const counterValue = pomodoroStore.state.get().counterValue
        const newCounterValue = counterValue + REFRESH_INTERVAL_MS
        pomodoroStore.actions.setPomodoroState({ counterValue: newCounterValue })

        updateLastTick()
      }, REFRESH_INTERVAL_MS)

      return () => timer.cancel()
    },
    [isPaused, counterValue, phase],
  )
}

export default useCounter
