import type { NextButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'
import TEST_IDS from '@data/testIds'

const NextButton = ({ nextPomodoro }: NextButtonProps) => {
  return (
    <Button handleClick={nextPomodoro} testId={TEST_IDS.pomodoro.nextButton}>
      Next
    </Button>
  )
}

export default NextButton
