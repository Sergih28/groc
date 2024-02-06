import type { PropsWithChildren } from 'react'

import { FaGithub } from 'react-icons/fa'

import useYearRange from '@hooks/useYearRange'

import Link from '@atoms/Link'

import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

import { URLS } from './constants'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

export const Footer = ({ children }: PropsWithChildren) => {
  return <footer className="footer">{children}</footer>
}

Footer.Year = () => {
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
