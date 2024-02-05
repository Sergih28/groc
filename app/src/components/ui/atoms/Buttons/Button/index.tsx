import type { ButtonProps } from './types'

import { BUTTON_TYPES } from './constants'

import './styles.css'

const Button = ({
  children,
  handleClick,
  type = BUTTON_TYPES.button,
  styles = '',
  testId = '',
}: ButtonProps) => {
  return (
    <button onClick={handleClick} className={`button ${styles}`} type={type} data-testid={testId}>
      {children}
    </button>
  )
}

export default Button
