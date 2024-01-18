import type { PlayPauseButtonProps } from './types'

import DEFAULT_VALUES from './constants'
import Button from '@atoms/Buttons/Button/'

const PlayPauseButton = ({
  text = DEFAULT_VALUES.text,
  testId = DEFAULT_VALUES.testId,
  handleClick = () => {},
}: PlayPauseButtonProps) => {
  return (
    <>
      <Button handleClick={handleClick} styles="counter" testId={testId}>
        {text}
      </Button>
    </>
  )
}

export default PlayPauseButton
