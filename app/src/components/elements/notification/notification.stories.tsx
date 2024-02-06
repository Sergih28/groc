import type { Meta, StoryObj } from '@storybook/react'

import Notification from '../components/elements/notification/index'

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: 'Notification',
}

export default meta
type Story = StoryObj<typeof Notification>

export const InfoNotification: Story = {
  args: {
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
