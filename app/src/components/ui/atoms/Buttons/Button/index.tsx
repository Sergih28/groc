import type { ButtonProps } from './types'
import { STYLES } from './styles'
import { BUTTON_TYPES, BUTTON_STYLES } from './constants'

const Button = ({
  children,
  handleClick,
  type = BUTTON_TYPES.button,
  styles = BUTTON_STYLES.general,
}: ButtonProps) => {
  return (
    <button onClick={handleClick} className={STYLES[styles]} type={type}>
      {children}
    </button>
  )
}

export default Button
