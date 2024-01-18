import type { ResetButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'
import TEST_IDS from '@data/testIds'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return (
    <Button handleClick={resetPomodoro} styles="counter" testId={TEST_IDS.pomodoro.resetButton}>
      Reset
    </Button>
  )
}

export default ResetButton
