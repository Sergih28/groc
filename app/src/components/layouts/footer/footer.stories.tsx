import type { Meta, StoryObj } from '@storybook/react'

import Footer from './components'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
}

type Story = StoryObj<typeof Footer>

export const NoRangeYearFooter: Story = {}

export const RangeYearFooter: Story = {}

export default meta
