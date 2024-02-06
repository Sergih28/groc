import type { LinkType } from './types'

const Link = ({ children, href, className = '' }: LinkType) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default Link
