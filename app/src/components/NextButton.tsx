import Button from './Button'

interface NextButtonProps {
  nextPomodoro: () => void
}

const NextButton = ({ nextPomodoro }: NextButtonProps) => {
  return <Button handleClick={nextPomodoro}>Next</Button>
}

export default NextButton
