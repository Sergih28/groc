/// <reference lib="dom" />
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import Slider from '@atoms/Slider/'

describe('Slider component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Slider component', () => {
    render(<Slider initialValue={0} maxValue={90} minValue={0} />)
  })

  test('given a initial value, the slider should render and have the slider text value as the initial value', () => {
    render(<Slider initialValue={23} maxValue={90} minValue={0} />)

    const sliderValueElement = screen.getByText('23')

    expect(sliderValueElement).toBeInTheDocument()
  })

  test('given a change of the value from 0 to 70, the slider value should display "70"', () => {
    render(<Slider initialValue={0} maxValue={90} minValue={0} />)

    const sliderElement = screen.getByRole('slider')
    const sliderValueElement = screen.getByText('0')

    expect(sliderElement).toBeInTheDocument()
    expect(sliderElement).toHaveValue('0')
    expect(sliderValueElement).toHaveTextContent('0')

    fireEvent.change(sliderElement, { target: { value: 70 } })

    expect(sliderElement).toHaveValue('70')
    expect(sliderValueElement).toHaveTextContent('70')
  })

  test('given a change of the slider value greater than the max value, returns the max value', () => {
    render(<Slider initialValue={70} maxValue={120} minValue={0} />)

    const sliderElement = screen.getByRole('slider')
    const sliderValueElement = screen.getByText('70')

    expect(sliderElement).toBeInTheDocument()
    expect(sliderElement).toHaveValue('70')

    fireEvent.change(sliderElement, { target: { value: 200 } })

    expect(sliderElement).toHaveValue('120')
    expect(sliderValueElement).toHaveTextContent('120')
  })

  test('given a change of the slider value lesser than the min value, returns the min value', () => {
    render(<Slider initialValue={80} maxValue={200} minValue={20} />)

    const sliderElement = screen.getByRole('slider')
    const sliderValueElement = screen.getByText('80')

    expect(sliderElement).toBeInTheDocument()
    expect(sliderElement).toHaveValue('80')

    fireEvent.change(sliderElement, { target: { value: 10 } })

    expect(sliderElement).toHaveValue('20')
    expect(sliderValueElement).toHaveTextContent('20')
  })
})
