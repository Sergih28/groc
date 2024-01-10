import type { NextButtonProps } from './types'

import Button from '@atoms/Buttons/Button/'

const NextButton = ({ nextPomodoro }: NextButtonProps) => {
  return <Button handleClick={nextPomodoro}>Next</Button>
}

export default NextButton
