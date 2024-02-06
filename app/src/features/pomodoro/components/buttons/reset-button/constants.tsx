import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const RESET_BUTTON_TEXT = t('button.reset')
