import type { ChangeEvent } from 'react'

export interface SwitchProps {
  isOn: boolean
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  switchLabel: string
  inputName: string
}
