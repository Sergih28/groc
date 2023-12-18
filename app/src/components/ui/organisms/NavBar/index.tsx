import { STYLES } from './styles'
import { NAVBAR_ELEMENTS } from './constants'
import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

const NavBar = () => {
  return (
    <ul className={STYLES.LIST}>
      {NAVBAR_ELEMENTS.map(({ url, name, isEnabled }) => {
        const ListElement = () => (
          <li className={isEnabled ? STYLES.ENABLED_ELEMENT : STYLES.DISABLED_ELEMENT}>{name}</li>
        )

        if (!isEnabled) return <ListElement />

        return (
          <a href={url}>
            <ListElement />
          </a>
        )
      })}
    </ul>
  )
}

export default NavBar
