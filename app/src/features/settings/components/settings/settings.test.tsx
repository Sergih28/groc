import { render, screen } from '@testing-library/react'

import Settings from '.'
import { DEFAULT_SETTINGS_VALUES } from './constants'

describe('Settings component test', () => {
  test('Default settings values snapshot', () => {
    expect(DEFAULT_SETTINGS_VALUES).toMatchSnapshot()
  })

  test('render Settings component', () => {
    render(<Settings />)
  })

  test('renders all the form elements', () => {
    render(<Settings />)

    const formElement = screen.getByTestId('settings-form')
    const inputPomodoroDuration = screen.getByTestId('pomodoroDuration')
    const inputBreakDuration = screen.getByTestId('breakDuration')
    const inputLongBreakDuration = screen.getByTestId('longBreakDuration')
    const inputRadioManual = screen.getByTestId('radio-manual')
    const inputRadioAuto = screen.getByTestId('radio-auto')
    const deletePomodoroButton = screen.getByRole('button', { name: 'DANGER: REMOVE DATA' })
    const submitPomodoroButton = screen.getByRole('button', { name: 'Submit' })

    expect(formElement).toBeInTheDocument()
    expect(inputPomodoroDuration).toBeInTheDocument()
    expect(inputBreakDuration).toBeInTheDocument()
    expect(inputLongBreakDuration).toBeInTheDocument()
    expect(inputRadioManual).toBeInTheDocument()
    expect(inputRadioAuto).toBeInTheDocument()
    expect(deletePomodoroButton).toBeInTheDocument()
    expect(submitPomodoroButton).toBeInTheDocument()
  })
})
