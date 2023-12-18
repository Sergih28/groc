import Slider from '../components/ui/atoms/Slider/'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Slider Stories',
}
type Story = StoryObj<typeof Slider>

export const DefaultSlider: Story = {}

export const CustomSlider: Story = {
  args: {
    initialValue: 20,
    maxValue: 360,
    minValue: 10,
  },
}

export default meta
