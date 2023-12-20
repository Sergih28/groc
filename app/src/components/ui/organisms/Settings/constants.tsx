import type { SETTINGS_OPTIONS_TYPE } from './types'
import { useTranslations, getLangFromWindowUrl } from '@i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const MODE_OPTIONS = {
  MANUAL: 'manual',
  AUTO: 'auto',
} as const
//TODO should 'description' (labels, translations) be a different object?
export const SETTINGS_OPTIONS: SETTINGS_OPTIONS_TYPE = {
  POMODORO_DURATION: {
    name: 'pomodoroDuration',
    description: t('settings.pomodoro'),
  },
  BREAK_DURATION: {
    name: 'breakDuration',
    description: t('settings.break'),
  },
  LONG_BREAK_DURATION: {
    name: 'longBreakDuration',
    description: t('settings.longBreak'),
  },
  MODE: {
    name: 'mode',
    description: t('settings.mode'),
  },
  MANUAL: {
    name: MODE_OPTIONS.MANUAL,
    description: t('settings.manual'),
  },
  AUTO: {
    name: MODE_OPTIONS.AUTO,
    description: t('settings.auto'),
  },
  DELETE: {
    name: 'delete',
    description: t('settings.delete'),
  },
  SUBMIT: {
    name: 'submit',
    description: t('settings.submit'),
  },
} as const

export const DEFAULT_SETTINGS_VALUES = {
  POMODORO_DURATION: 25,
  BREAK_DURATION: 5,
  LONG_BREAK_DURATION: 15,
  MODE: MODE_OPTIONS.MANUAL,
} as const
