import useCounter from '@hooks/useCounter'
import type { CounterProps } from './types'
import { ContentWrapper } from './components'
import PlayPauseButton from '@atoms/Buttons/PlayPause'

const Counter = ({
  seconds,
  isCountingUp = false,
  counterFormat,
  countingInterval,
}: CounterProps) => {
  const { counterContent, handlePause, isPaused, isFinished } = useCounter(
    seconds,
    isCountingUp,
    counterFormat,
    countingInterval,
  )

  return (
    <>
      <ContentWrapper>{counterContent}</ContentWrapper>
      {!isFinished && <PlayPauseButton isPaused={isPaused} handleClick={handlePause} />}
    </>
  )
}

export default Counter
