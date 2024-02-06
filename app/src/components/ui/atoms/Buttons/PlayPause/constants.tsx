import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const BUTTON_TEXT = {
  START: t('button.start'),
  PAUSE: t('button.pause'),
  CONTINUE: t('button.continue'),
} as const
