import Button from '@components/Button'

interface ResetButtonProps {
  resetPomodoro: () => void
}

const ResetButton = ({ resetPomodoro }: ResetButtonProps) => {
  return <Button handleClick={resetPomodoro}>Reset</Button>
}

export default ResetButton
