import type { PropsWithChildren } from 'react'

import { BUTTON_TYPES } from './constants'

export interface ButtonProps extends PropsWithChildren {
  handleClick: () => void
  styles?: string
  type?: BUTTON_TYPES_TYPE
  testId?: string
}

type BUTTON_TYPES_TYPE = keyof typeof BUTTON_TYPES
