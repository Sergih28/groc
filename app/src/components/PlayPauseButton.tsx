import { useState } from 'react'
import Button from '@components/Button'

interface PlayPauseButtonProps {
  initialState: boolean
}

const PlayPauseButton = ({ initialState }: PlayPauseButtonProps) => {
  const [isPaused, setIsPaused] = useState(initialState)

  const handleClick = () => {
    setIsPaused((isPaused) => !isPaused)
  }

  return (
    <>
      <Button handleClick={handleClick}>{isPaused ? 'Continue' : 'Pause'}</Button>
    </>
  )
}

export default PlayPauseButton
