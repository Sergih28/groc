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
    <label htmlFor={labelId} className="input-radio__label">
      {description}
      <input
        className="input-radio__button"
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
