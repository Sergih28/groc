import { useId, type ChangeEvent } from 'react'

const STYLES = {
  RADIO_BUTTON: 'ml-2 cursor-pointer',
  LABEL: 'block mb-2 font-semibold capitalize ',
}

interface InputRadioProps {
  description: string
  inputName: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  required?: boolean
}

const InputRadio = ({
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
        value={description}
        checked={checked}
        onChange={handleChange}
        required={required}
        data-testid={`radio-${description}`}
      />
    </label>
  )
}

export default InputRadio
