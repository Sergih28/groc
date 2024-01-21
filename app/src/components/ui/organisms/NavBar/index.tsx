import { NAVBAR_ELEMENTS } from './constants'
import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

import { STYLES } from './styles'

const NavBar = () => {
  const lang = getLangFromWindowUrl()
  const t = useTranslations(lang)

  return (
    <ul className={STYLES.LIST}>
      {NAVBAR_ELEMENTS.map(({ url, key, isEnabled }) => {
        const ListElement = () => (
          <li className={isEnabled ? STYLES.ENABLED_ELEMENT : STYLES.DISABLED_ELEMENT}>
            {/* FIXME: type */}
            {t(`nav.${key}` as any)}
          </li>
        )

        if (!isEnabled) return <ListElement key={key} />

        return (
          <a key={key} href={url}>
            <ListElement />
          </a>
        )
      })}
    </ul>
  )
}

export default NavBar
