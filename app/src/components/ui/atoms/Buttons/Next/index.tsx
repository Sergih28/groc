import Button from '@atoms/Buttons/Button/'
import type { NextButtonProps } from './types'

const NextButton = ({ nextPomodoro }: NextButtonProps) => {
  return <Button handleClick={nextPomodoro}>Next</Button>
}

export default NextButton
