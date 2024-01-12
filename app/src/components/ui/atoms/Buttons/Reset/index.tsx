import type { ResetButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return (
    <Button handleClick={resetPomodoro} styles="counter">
      Reset
    </Button>
  )
}

export default ResetButton
