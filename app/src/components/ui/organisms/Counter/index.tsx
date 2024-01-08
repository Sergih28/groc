import useCounter from '@hooks/useCounter'
import { BUTTON_TEXT } from './constants'
import type { CounterProps } from './types'
import { ContentWrapper } from './components'

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
      {!isFinished && (
        <button onClick={handlePause}>{isPaused ? BUTTON_TEXT.CONTINUE : BUTTON_TEXT.PAUSE}</button>
      )}
    </>
  )
}

export default Counter
