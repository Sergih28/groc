import { useId, useState } from 'react'

import type { SliderProps } from './types'

import { DEFAULT_SLIDER_VALUES } from './constants'

const Slider = ({
  initialValue = DEFAULT_SLIDER_VALUES.INITIAL,
  maxValue = DEFAULT_SLIDER_VALUES.MAX,
  minValue = DEFAULT_SLIDER_VALUES.MIN,
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(initialValue)
  const sliderId = useId()
  const sliderName = `slider-${sliderId}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = Number(e.target.value)

    setSliderValue(newSliderValue)
  }

  return (
    <div>
      <input
        type="range"
        name={sliderName}
        id={sliderId}
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={handleChange}
      />
      <span>{sliderValue}</span>
    </div>
  )
}

export default Slider
