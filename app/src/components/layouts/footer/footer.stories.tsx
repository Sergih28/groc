import type { Meta, StoryObj } from '@storybook/react'

import Footer from './components'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
}

type Story = StoryObj<typeof Footer>

export const NoRangeYearFooter: Story = {
  args: {
    currentYear: 2023,
  },
}

export const RangeYearFooter: Story = {
  args: {
    currentYear: 2026,
  },
}

export default meta
