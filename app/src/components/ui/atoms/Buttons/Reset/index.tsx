import type { ResetButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

import TEST_IDS from '@data/testIds'

import { RESET_BUTTON_TEXT } from './constants'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return (
    <Button
      handleClick={resetPomodoro}
      styles="button button__counter"
      testId={TEST_IDS.pomodoro.resetButton}
    >
      {RESET_BUTTON_TEXT}
    </Button>
  )
}

export default ResetButton
