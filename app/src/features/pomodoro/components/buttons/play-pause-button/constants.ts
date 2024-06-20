import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const BUTTON_TEXT = {
  START: t('button.start'),
  PAUSE: t('button.pause'),
  CONTINUE: t('button.continue'),
} as const

export const AUDIO_VOLUME = 0.5
