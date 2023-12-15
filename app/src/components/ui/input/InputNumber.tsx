import { useId, type ChangeEvent } from 'react'

interface InputNumberProps {
  name: string
  value: number
  description: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
}

const STYLES = {
  LABEL: 'block mb-2 font-semibold',
  INPUT:
    'block w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-yellow-500 font-light',

  ERROR_MESSAGE: 'text-red-500 text-sm mt-1',
} as const

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
