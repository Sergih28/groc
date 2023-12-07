import { Toaster } from 'sonner'
import type { ToasterProps } from './types'

const Notification = ({ customization }: ToasterProps) => {
  return <Toaster {...customization} />
}

export default Notification
