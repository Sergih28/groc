import Button from '@atoms/Buttons/Button'
import ProgressBar from '@atoms/ProgressBar'
import useCounter from '@hooks/useCounter'
import Counter from '@molecules/Counter'
import { handlePhase } from '@store/Pomodoro/actions'
import { BUTTON_TEXT } from './constants'

const Pomodoro = () => {
  useCounter()

  return (
    <>
      <ProgressBar />
      <div className="sm:w-300px mb-6 flex justify-center gap-2 align-middle sm:mx-auto sm:flex-col lg:flex-row">
        <Button handleClick={() => handlePhase('pomodoro')} styles="options">
          {BUTTON_TEXT.POMODORO}
        </Button>
        <Button handleClick={() => handlePhase('break')} styles="options">
          {BUTTON_TEXT.BREAK}
        </Button>
        <Button handleClick={() => handlePhase('longBreak')} styles="options">
          {BUTTON_TEXT.LONG_BREAK}
        </Button>
      </div>
      <Counter />
    </>
  )
}

export default Pomodoro
