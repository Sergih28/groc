import type { PropsWithChildren } from 'react'
import useCounter from '@hooks/useCounter'

interface Props {
  seconds: number
  isCountingUp: boolean
  counterFormat: 'minutes' | 'seconds'
  countingInterval: number
}

const BUTTON_TEXT = { CONTINUE: 'CONTINUE', PAUSE: 'PAUSE' } as const

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-20 w-40 items-center justify-center rounded-md bg-gray-200 p-4 text-4xl">
      {children}
    </div>
  )
}

const Counter = ({ seconds, isCountingUp = false, counterFormat, countingInterval }: Props) => {
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
