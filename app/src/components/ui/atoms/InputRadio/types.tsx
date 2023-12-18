import { type ChangeEvent } from 'react'

export interface InputRadioProps {
  description: string
  inputName: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  required?: boolean
}
