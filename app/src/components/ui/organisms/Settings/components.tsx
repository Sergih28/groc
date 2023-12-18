import InputNumber from '@atoms/InputNumber/index'
import InputRadio from '@atoms/InputRadio/index'
import { SETTINGS_OPTIONS } from './constants'
import type { InputRadioModeProps, InputNumberSettingsProps } from './types'
import { useTranslations, getLangFromWindowUrl } from '@i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const InputPomodoroDuration = ({
  value,
  handleChange,
  error = undefined,
}: InputNumberSettingsProps) => {
  return (
    <InputNumber
      value={value}
      name={SETTINGS_OPTIONS.POMODORO_DURATION.name}
      description={SETTINGS_OPTIONS.POMODORO_DURATION.description}
      handleChange={handleChange}
      error={error}
    />
  )
}

export const InputBreakDuration = ({ value, handleChange, error }: InputNumberSettingsProps) => {
  return (
    <InputNumber
      value={value}
      name={SETTINGS_OPTIONS.BREAK_DURATION.name}
      description={SETTINGS_OPTIONS.BREAK_DURATION.description}
      handleChange={handleChange}
      error={error}
    />
  )
}

export const InputLongBreakDuration = ({
  value,
  handleChange,
  error,
}: InputNumberSettingsProps) => {
  return (
    <InputNumber
      value={value}
      name={SETTINGS_OPTIONS.LONG_BREAK_DURATION.name}
      description={SETTINGS_OPTIONS.LONG_BREAK_DURATION.description}
      handleChange={handleChange}
      error={error}
    />
  )
}

export const InputRadioMode = ({ value, handleChange, checked }: InputRadioModeProps) => {
  return (
    <InputRadio
      value={value}
      description={t(`settings.${value}`)}
      checked={checked}
      handleChange={handleChange}
      inputName="mode"
      required={true}
      data-testid={`radio-${value}`}
    />
  )
}
