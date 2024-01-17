import { useStore } from '@nanostores/react'

import { ContentWrapper } from './components'
import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'
import { $counter } from '@store/Pomodoro'

const Counter = () => {
  const { counterContent, isPaused, handleReset, handlePause } = useStore($counter)

  return (
    <>
      <ContentWrapper>
        <span className="text-5xl font-semibold text-white">{counterContent}</span>
        <div className="flex gap-4">
          <PlayPauseButton isPaused={isPaused} handleClick={handlePause} />
          <ResetButton resetPomodoro={handleReset} />
        </div>
      </ContentWrapper>
    </>
  )
}

export default Counter
