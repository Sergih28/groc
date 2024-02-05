import type { PropsWithChildren } from 'react'

export type ProgressBarWrapperType = PropsWithChildren & {
  percentage: number
  backgroundColor: string
}

export type ProgressBarContentProps = Pick<
  ProgressBarWrapperType,
  'percentage' | 'backgroundColor'
> & {
  showPercentage: boolean
  fillColor: string
}
