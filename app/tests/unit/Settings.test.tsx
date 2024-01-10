import { cleanup, render, screen } from '@testing-library/react'

import { fallbackLang } from '@i18n/ui'
import { useTranslations } from '@i18n/utils'
import Settings from '@organisms/Settings/'
import { DEFAULT_SETTINGS_VALUES } from '@organisms/Settings/constants'

describe('Settings component test', () => {
  const DEFAULT_LANGUAGE = fallbackLang
  const t = useTranslations(DEFAULT_LANGUAGE)

  afterEach(() => {
    cleanup()
  })

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
    const deletePomodoroButton = screen.getByRole('button', { name: t('settings.delete') })
    const submitPomodoroButton = screen.getByRole('button', { name: t('settings.submit') })

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
