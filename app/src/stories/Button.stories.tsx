import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/ui/atoms/Buttons/Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

type Story = StoryObj<typeof Button>

export const MainButton: Story = {
  args: {
    children: 'Main button text',
    // eslint-disable-next-line no-console
    handleClick: () => console.log('click main button'),
  },
}

export default meta
