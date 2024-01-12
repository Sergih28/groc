import { useStore } from '@nanostores/react'

import { ContentWrapper } from './components'
import PlayPauseButton from '@atoms/Buttons/PlayPause'
import ResetButton from '@atoms/Buttons/Reset'
import { $counter, $phase, $settings } from '@store/Pomodoro'
import useCounter from '@hooks/useCounter'

const Counter = () => {
  const { counterContent, isPaused, handleReset, handlePause } = useStore($counter)
  const phase = useStore($phase)
  const settings = useStore($settings)

  useCounter(
    settings[`${phase}Duration`],
    settings.isCountingUp,
    settings.counterFormat,
    settings.countingInterval,
  )

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
