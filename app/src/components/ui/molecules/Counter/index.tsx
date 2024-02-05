import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro/'

import { Counter } from './components'

const CounterComponent = () => {
  const { counterContent, isPaused, counterValue } = useStore(pomodoroStore.state)

  const contentProps = { counterContent }
  const buttonsProps = { isPaused, counterValue }

  return (
    <Counter>
      <Counter.Content {...contentProps} />
      <Counter.Buttons {...buttonsProps} />
    </Counter>
  )
}

export default CounterComponent
