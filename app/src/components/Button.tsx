import type { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  handleClick: () => void
  styles?: BUTTON_STYLES_TYPE
  type?: BUTTON_TYPES_TYPE
}

const BUTTON_TYPES = ['button', 'submit', 'reset'] as const
const BUTTON_STYLES = ['general', 'delete', 'submit'] as const

type BUTTON_TYPES_TYPE = (typeof BUTTON_TYPES)[number]
type BUTTON_STYLES_TYPE = (typeof BUTTON_STYLES)[number]

const STYLES = {
  submit:
    'block w-full bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition ease-in-out',
  general:
    'bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded inline-block',
  delete:
    'block mx-auto mt-4 mb-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded',
}

const Button = ({
  children,
  handleClick,
  type = BUTTON_TYPES[0],
  styles = BUTTON_STYLES[0],
}: ButtonProps) => {
  return (
    <button onClick={handleClick} className={STYLES[styles]} type={type}>
      {children}
    </button>
  )
}

export default Button
