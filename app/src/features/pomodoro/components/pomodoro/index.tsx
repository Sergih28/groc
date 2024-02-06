import { useStore } from '@nanostores/react'

import useCounter from '@features/pomodoro/hooks/useCounter'

import { pomodoroStore } from '@store/Pomodoro'

import Counter from '../counter'
import PhaseSelector from '../phase-selector'
import ProgressBar from '../progress-bar'

import '@features/pomodoro/styles.css'

const Pomodoro = () => {
  useCounter()

  const { counterValue } = useStore(pomodoroStore.state)
  const hasStarted = counterValue > 0

  return (
    <div id="pomodoro">
      {hasStarted && <ProgressBar />}
      <PhaseSelector />
      <Counter />
    </div>
  )
}

export default Pomodoro
