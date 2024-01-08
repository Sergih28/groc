import { type ChangeEvent } from 'react'

export interface InputRadioProps {
  value: string
  description: string
  inputName: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  required?: boolean
}
