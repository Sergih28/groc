import type { PropsWithChildren } from 'react'

export interface ProgressBarProps {
  currentValue: number
  baseValue?: number
  targetValue?: number
  backgroundColor?: string
  fillColor?: string
  showPercentage?: boolean
  percentage?: number
}

export type ProgressBarWrapperProps = Pick<ProgressBarProps, 'percentage' | 'backgroundColor'> &
  PropsWithChildren

export type ProgressBarContentProps = Omit<
  ProgressBarProps,
  'currentValue' | 'baseValue' | 'targetValue'
>
