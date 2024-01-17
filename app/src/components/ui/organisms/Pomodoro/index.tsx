import { useEffect } from 'react'

import ProgressBar from '@atoms/ProgressBar'
import Button from '@components/ui/atoms/Buttons/Button'
import { loadActivePomodoro } from '@components/ui/molecules/Counter/functions'
import useCounter from '@hooks/useCounter'
import Counter from '@molecules/Counter'
import { updatePhase } from '@store/Pomodoro'
import { $counter } from '@store/Pomodoro'

const Pomodoro = () => {
  useCounter()

  useEffect(() => {
    loadActivePomodoro()
  }, [])

  return (
    <>
      <ProgressBar />
      <div className="mb-6 flex justify-center gap-2 align-middle">
        <Button handleClick={() => updatePhase('pomodoro')} styles="options">
          Pomodoro
        </Button>
        <Button handleClick={() => updatePhase('break')} styles="options">
          Break
        </Button>
        <Button handleClick={() => updatePhase('longBreak')} styles="options">
          Long Break
        </Button>
      </div>
      <Counter />
      {JSON.stringify($counter.get())}
    </>
  )
}

export default Pomodoro
