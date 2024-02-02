import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const RESET_BUTTON_TEXT = t('button.reset')
