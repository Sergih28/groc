import type { Meta, StoryObj } from '@storybook/react'

import Footer from '../components/ui/organisms/Footer/'

const meta: Meta<typeof Footer> = {
  component: Footer,
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
