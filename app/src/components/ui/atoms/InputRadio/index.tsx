import { useId } from 'react'

import { type InputRadioProps } from './types'

import { STYLES } from './styles'

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
    <label htmlFor={labelId} className={STYLES.LABEL}>
      {description}
      <input
        className={STYLES.RADIO_BUTTON}
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
