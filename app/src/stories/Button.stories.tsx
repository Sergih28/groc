import Button from '../components/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
}

type Story = StoryObj<typeof Button>

export const MainButton: Story = {
  args: {
    children: 'Main button text',
    handleClick: () => console.log('click main button'),
  },
}

export default meta
