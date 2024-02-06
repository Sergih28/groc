import type { PropsWithChildren } from 'react'

import { FaGithub } from 'react-icons/fa'

import Link from '@components/elements/link'

import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

import useYearRange from '@hooks/use-year-range'

const URLS = {
  OWNER: 'https://github.com/sergiheras',
  CONTRIBUTORS: 'https://github.com/Sergih28/groc/graphs/contributors',
  LICENSE: 'https://github.com/Sergih28/groc/blob/main/LICENSE',
  REPO: 'https://github.com/Sergih28/groc',
} as const

const Footer = ({ children }: PropsWithChildren) => {
  return <footer className="footer">{children}</footer>
}

Footer.Year = () => {
  const language = getLangFromWindowUrl()
  const t = useTranslations(language)

  const CURRENT_YEAR = new Date().getFullYear()
  const yearRange = useYearRange(CURRENT_YEAR)

  return (
    <p>
      Copyright © <span>{yearRange}</span>, <Link href={URLS.OWNER}>Sergi Heras</Link>
      <span> & </span>
      <Link href={URLS.CONTRIBUTORS}>{t('footer.contributors')}</Link>
    </p>
  )
}

Footer.License = () => {
  const language = getLangFromWindowUrl()
  const t = useTranslations(language)

  return (
    <div>
      {t('footer.release_license')} <Link href={URLS.LICENSE}>{t('footer.license')}</Link>
    </div>
  )
}

Footer.Github = () => {
  return (
    <div>
      <Link href={URLS.REPO} className="footer__github">
        Github
        <FaGithub />
      </Link>
    </div>
  )
}

export default Footer
