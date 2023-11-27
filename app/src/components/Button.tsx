import type { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  handleClick: () => void
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>{children}</button>
}

export default Button
