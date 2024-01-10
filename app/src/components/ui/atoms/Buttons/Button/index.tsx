import type { ButtonProps } from './types'

import { BUTTON_STYLES, BUTTON_TYPES } from './constants'

import { STYLES } from './styles'

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
