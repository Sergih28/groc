import { useId } from 'react'

import type { InputNumberProps } from './types'

import './styles.css'

const MIN = 1

const InputNumber = ({
  name,
  value,
  description,
  handleChange,
  error = undefined,
}: InputNumberProps) => {
  const labelId = useId()

  return (
    <label htmlFor={labelId} className="input-number__label">
      {description}
      <input
        className="input-number"
        type="number"
        min={MIN}
        name={name}
        value={value}
        onChange={handleChange}
        id={labelId}
        required
        data-testid={name}
      />
      {error && <span className="input-number__error-message">{error}</span>}
    </label>
  )
}

export default InputNumber
