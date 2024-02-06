import type { PropsWithChildren } from 'react'

export interface ToasterProps extends PropsWithChildren {
  customization?: {
    theme?: 'light' | 'dark' | 'system'
    expand?: boolean
    visibleToasts?: number
    offset?: number
    richColors?: boolean
    closeButton?: boolean
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
  }
}
