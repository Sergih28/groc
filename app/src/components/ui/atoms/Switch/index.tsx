import { useId } from 'react'
import type { SwitchProps } from './types'

const Switch = ({ isOn, handleChange, switchLabel }: SwitchProps) => {
  const checkBoxId: string = useId()
  const inputName: string = `switch-${checkBoxId}`

  return (
    <>
      <input
        type="checkbox"
        name={inputName}
        id={checkBoxId}
        checked={isOn}
        onChange={handleChange}
      />
      <label htmlFor={checkBoxId}>{switchLabel}</label>
    </>
  )
}

export default Switch
