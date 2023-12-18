import Button from '@atoms/Buttons/Button/'
import type { ResetButtonProps } from './types'

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return <Button handleClick={resetPomodoro}>Reset</Button>
}

export default ResetButton
