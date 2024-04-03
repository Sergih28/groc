import { useEffect } from 'react'

import { useStore } from '@nanostores/react'
// @ts-expect-error There are no types for this dependency
import useSound from 'use-sound'

import {
  loadActivePomodoro,
  updateLastTick,
} from '@features/pomodoro/services/local-storage/pomodoro'

import { accurateTimer } from '@utils/time'

import { pomodoroStore } from '@store/pomodoro'
import { handleFinish } from '@store/pomodoro/actions'
import { isPomodoroFinished } from '@store/pomodoro/utils'

// Sound effect sourced from: https://pixabay.com/sound-effects/success-1-6297/
import finishSound from '@assets/finish.mp3'

const REFRESH_INTERVAL_MS = 100

const useCounter = () => {
  const { sound } = useStore(pomodoroStore.state)

  const [playFinishSound] = useSound(finishSound, { volume: sound ? 0.5 : 0 })

  const { counterValue, isPaused, phase } = useStore(pomodoroStore.state)

  useEffect(function onLoad() {
    loadActivePomodoro()
  }, [])

  useEffect(
    function updateCounter() {
      const timer = accurateTimer(() => {
        const isFinished = isPomodoroFinished()

        if (!isPaused && isFinished) {
          playFinishSound()
          handleFinish()
        }

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
