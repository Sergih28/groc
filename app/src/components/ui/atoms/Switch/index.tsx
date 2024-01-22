import { useId } from 'react'

import type { SwitchProps } from './types'

const Switch = ({ isOn, handleChange, switchLabel, inputName }: SwitchProps) => {
  const checkBoxId: string = useId()

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
