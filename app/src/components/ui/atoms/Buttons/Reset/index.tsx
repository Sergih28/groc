import type { ResetButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

import { RESET_BUTTON_TEXT } from './constants'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return (
    <Button handleClick={resetPomodoro} styles="button__counter">
      {RESET_BUTTON_TEXT}
    </Button>
  )
}

export default ResetButton
