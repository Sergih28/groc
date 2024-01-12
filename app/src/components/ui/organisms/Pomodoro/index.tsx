import ProgressBar from '@atoms/ProgressBar'
import Button from '@components/ui/atoms/Buttons/Button'
import Counter from '@molecules/Counter'
import { handlePhase } from '@store/Pomodoro'

const Pomodoro = () => {
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
