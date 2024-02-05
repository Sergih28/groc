import { useStore } from '@nanostores/react'

import useCounter from '@hooks/useCounter'

import { pomodoroStore } from '@store/Pomodoro/'

import ProgressBar from '@atoms/ProgressBar'

import Counter from '@molecules/Counter'

import { PhaseButtons } from './components'

const Pomodoro = () => {
  useCounter()

  const { counterValue } = useStore(pomodoroStore.state)
  const hasStarted = counterValue > 0

  return (
    <>
      {hasStarted && <ProgressBar />}
      <PhaseButtons />
      <Counter />
    </>
  )
}

export default Pomodoro
