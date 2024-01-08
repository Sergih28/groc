import type { Meta, StoryObj } from '@storybook/react'
import Notification from '../components/Notification'

const meta: Meta<typeof Notification> = {
  component: Notification,
}

export default meta
type Story = StoryObj<typeof Notification>

export const InfoNotification: Story = {
  args: {
    message: 'Info message',
    type: 'info',
    customization: {
      position: 'top-center',
      expand: true,
      richColors: true,
      theme: 'light',
      visibleToasts: 3,
      closeButton: true,
      offset: 32,
    },
  },
}

export const SuccessNotification: Story = {
  args: {
    message: 'Success message',
    type: 'success',
    customization: {
      position: 'top-right',
      expand: false,
      theme: 'dark',
      visibleToasts: 6,
      closeButton: true,
    },
  },
}

export const ErrorNotification: Story = {
  args: {
    message: 'Error message',
    type: 'error',
    customization: {
      position: 'top-left',
      expand: true,
      richColors: true,
      theme: 'light',
      visibleToasts: 2,
      closeButton: true,
    },
  },
}

export const MessageNotification: Story = {
  args: {
    message: 'Message notification message',
    type: 'message',
    customization: {
      position: 'bottom-center',
      expand: true,
      richColors: true,
      theme: 'light',
      visibleToasts: 1,
      closeButton: true,
    },
  },
}

export const LoadingNotification: Story = {
  args: {
    message: 'Loading message',
    type: 'loading',
    customization: {
      position: 'top-center',
      expand: true,
      richColors: true,
      theme: 'dark',
      visibleToasts: 2,
      closeButton: true,
    },
  },
}
