import { useId } from 'react'
import { type InputNumberProps } from './types'
import { STYLES } from './styles'

const InputNumber = ({
  name,
  value,
  description,
  handleChange,
  error = undefined,
}: InputNumberProps) => {
  const labelId = useId()

  return (
    <label htmlFor={labelId} className={STYLES.LABEL}>
      {description}
      <input
        className={STYLES.INPUT}
        type="number"
        min={1}
        name={name}
        value={value}
        onChange={handleChange}
        id={labelId}
        required
        data-testid={name}
      />
      {error && <span className={STYLES.ERROR_MESSAGE}>{error}</span>}
    </label>
  )
}

export default InputNumber
