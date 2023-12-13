import ProgressBar from '@components/ProgressBar'
import { screen, render, cleanup } from '@testing-library/react'
import { colorToRgb } from './helpers'

describe('ProgressBar component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the ProgressBar component', () => {
    render(<ProgressBar currentValue={20} />)
  })

  describe('ProgressBar component values', () => {
    test('given a progress bar with default values, should have the value of the current value', () => {
      render(<ProgressBar currentValue={75} />)

      const progressElement = screen.getByRole('progressbar')

      expect(Number(progressElement.getAttribute('aria-valuenow'))).toBe(75)
    })

    test('given a progress bar with custom values, should have the value of the percentage', () => {
      render(<ProgressBar currentValue={50} baseValue={50} targetValue={200} />)

      const progressElement = screen.getByRole('progressbar')

      expect(Number(progressElement.getAttribute('aria-valuenow'))).toBe(0)
    })
  })

  describe('ProgressBar component percentage rendering', () => {
    test('given a progres bar with percentage, should render the percentage', () => {
      render(<ProgressBar currentValue={12} />)

      const percentageElement = screen.getByText('12%')
      expect(percentageElement).toBeInTheDocument()
    })

    test('given a progress bar without percentage, should not render a percentage element', () => {
      render(<ProgressBar currentValue={50} showPercentage={false} />)

      expect(screen.queryByText('50%')).not.toBeInTheDocument()
    })
  })

  describe('ProgressBar component color rendering', () => {
    test('given a progress bar with default values, should have the default background and fill color', () => {
      const backgroundColor = colorToRgb('blue')
      const fillColor = colorToRgb('yellow')
      const percentage = 50
      render(<ProgressBar currentValue={percentage} showPercentage={true} />)

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText(`${percentage}%`)

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColor)
      expect(filledBarStyles.backgroundColor).toBe(fillColor)
    })

    test('given a progress bar with custom colors, should render those custom colors', () => {
      const backgroundColor = 'purple'
      const fillColor = 'red'
      const backgroundColorRGB = colorToRgb(backgroundColor)
      const fillColorRGB = colorToRgb(fillColor)
      const percentage = 12
      render(
        <ProgressBar
          currentValue={percentage}
          showPercentage={true}
          backgroundColor={backgroundColor}
          fillColor={fillColor}
        />,
      )

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText(`${percentage}%`)

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColorRGB)
      expect(filledBarStyles.backgroundColor).toBe(fillColorRGB)
    })
  })
})
