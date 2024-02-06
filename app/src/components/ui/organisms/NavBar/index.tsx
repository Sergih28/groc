import { type ValUIType } from '@i18n/ui'
import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

import { NAVBAR_ELEMENTS } from './constants'

import './styles.css'

const NavBar = () => {
  const lang = getLangFromWindowUrl()
  const t = useTranslations(lang)

  return (
    <ul className="navbar__list">
      {NAVBAR_ELEMENTS.map(({ url, key, isEnabled }) => {
        const ListElement = () => (
          <li className={isEnabled ? 'navbar__list--enabled' : 'navbar__list--disabled'}>
            {t(`nav.${key}` as ValUIType)}
          </li>
        )

        if (!isEnabled) return <ListElement key={key} />

        return (
          <a key={key} href={`/${lang}${url}`}>
            <ListElement />
          </a>
        )
      })}
    </ul>
  )
}

export default NavBar
