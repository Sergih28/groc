import type { PropsWithChildren } from 'react'

import { BUTTON_STYLES, BUTTON_TYPES } from './constants'

export interface ButtonProps extends PropsWithChildren {
  handleClick: () => void
  styles?: BUTTON_STYLES_TYPE
  type?: BUTTON_TYPES_TYPE
  testId?: string
}

type BUTTON_TYPES_TYPE = keyof typeof BUTTON_TYPES
type BUTTON_STYLES_TYPE = keyof typeof BUTTON_STYLES
