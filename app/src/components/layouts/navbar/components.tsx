import type { PropsWithChildren } from 'react'

import { type ValUIType } from '@services/i18n/ui'
import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

import { NAVBAR_ELEMENTS } from './constants'
import ThemeToggle from './theme-toggle'

import './styles.css'

const NavBar = ({ children }: PropsWithChildren) => {
  return <aside id="navbar">{children}</aside>
}

NavBar.Logo = () => {
  return (
    <div id="logo">
      <span>GROC</span>
    </div>
  )
}

NavBar.Menu = () => {
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
      <li>
        <ThemeToggle />
      </li>
    </ul>
  )
}

export default NavBar
