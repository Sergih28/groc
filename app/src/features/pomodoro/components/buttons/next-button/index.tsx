import type { NextButtonProps } from '../types'

import TEST_IDS from '@data/test-ids'

import { Button } from '@components/elements/button/'

const NextButton = ({ nextPomodoro }: NextButtonProps) => {
  return (
    <Button onClick={nextPomodoro} datatest-id={TEST_IDS.pomodoro.nextButton}>
      Next
    </Button>
  )
}

export default NextButton
