import { useState, useId } from 'react'
import type { SwitchProps } from './types'

const Switch = ({ initialState, switchLabel }: SwitchProps) => {
  const [isOn, setIsOn] = useState(initialState)
  const checkBoxId: string = useId()
  const inputName: string = `switch-${checkBoxId}`

  const handleChange = () => {
    setIsOn((isOn) => !isOn)
  }

  return (
    <>
      <label htmlFor={checkBoxId}>
        {switchLabel}
        <input
          type="checkbox"
          name={inputName}
          id={checkBoxId}
          checked={isOn}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export default Switch
