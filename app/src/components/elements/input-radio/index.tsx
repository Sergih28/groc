import { useId } from 'react'

import { type InputRadioProps } from './types'
import './styles.css'

const InputRadio = ({
  value,
  description,
  inputName,
  handleChange,
  checked,
  required = true,
}: InputRadioProps) => {
  const labelId = useId()

  return (
    <label htmlFor={labelId} className="input__radio--label">
      {description}
      <input
        className="input__radio--button"
        type="radio"
        name={inputName}
        id={labelId}
        value={value}
        checked={checked}
        onChange={handleChange}
        required={required}
        data-testid={`radio-${value}`}
      />
    </label>
  )
}

export default InputRadio
