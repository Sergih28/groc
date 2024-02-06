import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const BUTTON_TEXT = {
  pomodoro: t('button.pomodoro'),
  break: t('button.break'),
  longBreak: t('button.long-break'),
}
