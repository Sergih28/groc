import { useEffect } from 'react'

import { useStore } from '@nanostores/react'

import ProgressBar from '@atoms/ProgressBar'
import Button from '@components/ui/atoms/Buttons/Button'
import { loadActivePomodoro } from '@components/ui/molecules/Counter/functions'
import useCounter from '@hooks/useCounter'
import Counter from '@molecules/Counter'
import { $counter } from '@store/Pomodoro'

const Pomodoro = () => {
  useCounter()

  useEffect(() => {
    loadActivePomodoro()
  }, [])

  const { handlePhase } = useStore($counter)

  return (
    <>
      <ProgressBar />
      <div className="mb-6 flex justify-center gap-2 align-middle">
        <Button handleClick={() => handlePhase('pomodoro')} styles="options">
          Pomodoro
        </Button>
        <Button handleClick={() => handlePhase('break')} styles="options">
          Break
        </Button>
        <Button handleClick={() => handlePhase('longBreak')} styles="options">
          Long Break
        </Button>
      </div>
      <Counter />
    </>
  )
}

export default Pomodoro
