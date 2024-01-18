import { useStore } from '@nanostores/react'

import { ContentWrapper } from './components'
import { BUTTON_TEXT } from './constants'
import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'
import TEST_ID from '@data/testIds'
import { $counter } from '@store/Pomodoro'

const Counter = () => {
  const { counterContent, isPaused, handleReset, handlePause, counterValue } = useStore($counter)
  const hasStarted = counterValue > 0
  const buttonText = !hasStarted
    ? BUTTON_TEXT.START
    : isPaused
      ? BUTTON_TEXT.CONTINUE
      : BUTTON_TEXT.PAUSE
  const buttonTestId = !hasStarted
    ? TEST_ID.pomodoro.startButton
    : isPaused
      ? TEST_ID.pomodoro.continueButton
      : TEST_ID.pomodoro.pauseButton
  return (
    <>
      <ContentWrapper>
        <span data-testid="counter-content" className="text-5xl font-semibold text-white">
          {counterContent}
        </span>
        <div className="flex gap-4">
          <PlayPauseButton text={buttonText} handleClick={handlePause} testId={buttonTestId} />
          <ResetButton resetPomodoro={handleReset} />
        </div>
      </ContentWrapper>
    </>
  )
}

export default Counter
