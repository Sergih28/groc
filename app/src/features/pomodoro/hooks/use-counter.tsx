import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import {
  loadActivePomodoro,
  updateLastTick,
} from '@features/pomodoro/services/local-storage/pomodoro'

import { accurateTimer } from '@utils/time'

import { pomodoroStore } from '@store/pomodoro'
import { isPomodoroFinished } from '@store/pomodoro/utils'

const REFRESH_INTERVAL_MS = 100

const useCounter = () => {
  const { counterValue, isPaused, phase } = useStore(pomodoroStore.state)

  useEffect(function onLoad() {
    loadActivePomodoro()
  }, [])

  useEffect(
    function updateCounter() {
      const timer = accurateTimer(() => {
        const isFinished = isPomodoroFinished()

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
