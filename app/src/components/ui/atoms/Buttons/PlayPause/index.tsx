import { useState } from 'react'
import Button from '@atoms/Buttons/Button/'
import type { PlayPauseButtonProps } from './types'

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
