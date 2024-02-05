import type { PlayPauseButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

import DEFAULT_VALUES from './constants'

const PlayPauseButton = ({
  text = DEFAULT_VALUES.text,
  testId = DEFAULT_VALUES.testId,
  handleClick = () => {},
}: PlayPauseButtonProps) => {
  return (
    <>
      <Button handleClick={handleClick} styles="button__counter" testId={testId}>
        {text}
      </Button>
    </>
  )
}

export default PlayPauseButton
