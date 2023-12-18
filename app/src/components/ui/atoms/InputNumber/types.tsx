import { type ChangeEvent } from 'react'

export interface InputNumberProps {
  name: string
  value: number
  description: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
}
