import { MODE_OPTIONS } from './constants'
import type { InputNumberProps } from '@atoms/InputNumber/types'
import type { InputRadioProps } from '@atoms/InputRadio/types'

type SETTING_TYPE = {
  name: string
  description: string
}

type MODE_OPTIONS_TYPE = (typeof MODE_OPTIONS)[keyof typeof MODE_OPTIONS]

export type SETTINGS_OPTIONS_TYPE = {
  POMODORO_DURATION: SETTING_TYPE
  BREAK_DURATION: SETTING_TYPE
  LONG_BREAK_DURATION: SETTING_TYPE
  MODE: SETTING_TYPE
  MANUAL: SETTING_TYPE
  AUTO: SETTING_TYPE
  DELETE: SETTING_TYPE
  SUBMIT: SETTING_TYPE
}

export type Values = {
  pomodoroDuration: number
  breakDuration: number
  longBreakDuration: number
  mode: MODE_OPTIONS_TYPE
  [key: string]: number | MODE_OPTIONS_TYPE
}

export type InputRadioModeProps = Pick<InputRadioProps, 'handleChange' | 'checked'> & {
  value: MODE_OPTIONS_TYPE
}

export type InputNumberSettingsProps = Pick<InputNumberProps, 'value' | 'handleChange' | 'error'>
