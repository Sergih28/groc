import type { PropsWithChildren } from 'react'
import { STYLES } from './styles'

export const ContentWrapper = ({ children }: PropsWithChildren) => {
  return <div className={STYLES.CONTENT_WRAPPER}>{children}</div>
}
