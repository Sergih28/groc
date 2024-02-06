import type { PropsWithChildren } from 'react'

export type LinkType = PropsWithChildren & {
  href: string
  className?: string
}
