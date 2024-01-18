import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'
import { useStore } from '@nanostores/react'
import { $counter } from '@store/Pomodoro'

import { ContentWrapper } from './components'
import { BUTTON_TEXT } from './constants'

const Counter = () => {
  const { counterContent, isPaused, handleReset, handlePause, counterValue } = useStore($counter)
  const hasStarted = counterValue > 0
  const buttonText = !hasStarted
    ? BUTTON_TEXT.START
    : isPaused
      ? BUTTON_TEXT.CONTINUE
      : BUTTON_TEXT.PAUSE

  return (
    <>
      <ContentWrapper>
        <span className="text-5xl font-semibold text-white">{counterContent}</span>
        <div className="flex gap-4">
          <PlayPauseButton text={buttonText} handleClick={handlePause} />
          <ResetButton resetPomodoro={handleReset} />
        </div>
      </ContentWrapper>
    </>
  )
}

export default Counter
