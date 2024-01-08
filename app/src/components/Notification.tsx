import { Toaster, toast } from 'sonner'

interface NotificationProps {
  message: string
  type: 'message' | 'success' | 'info' | 'error' | 'loading'
  customization?: {
    theme?: 'light' | 'dark' | 'system'
    expand?: boolean
    visibleToasts?: number
    offset?: number
    richColors?: boolean
    closeButton?: boolean
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
  }
}

const Notification = ({ message, type, customization }: NotificationProps) => {
  return <Toaster {...customization}>{toast[type](message)}</Toaster>
}

export default Notification
