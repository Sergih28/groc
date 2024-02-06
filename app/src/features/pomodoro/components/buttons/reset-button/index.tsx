import type { ResetButtonProps } from '../types'

import { Button } from '@components/elements/button'

import { RESET_BUTTON_TEXT } from './constants'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return (
    <Button onClick={resetPomodoro} className="">
      {RESET_BUTTON_TEXT}
    </Button>
  )
}

export default ResetButton
