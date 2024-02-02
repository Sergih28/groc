import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const BUTTON_TEXT = {
  POMODORO: t('button.pomodoro'),
  BREAK: t('button.break'),
  LONG_BREAK: t('button.long-break'),
}
