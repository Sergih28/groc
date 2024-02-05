import type { PropsWithChildren } from 'react'

import { FaGithub } from 'react-icons/fa'

import useYearRange from '@hooks/useYearRange'

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
      Copyright © <span>{yearRange}</span>,{' '}
      <a href={URLS.OWNER} target="_blank">
        Sergi Heras
      </a>
      <span> & </span>
      <a href={URLS.CONTRIBUTORS} target="_blank">
        {t('footer.contributors')}
      </a>
    </p>
  )
}

Footer.License = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {t('footer.release_license')}{' '}
      <a href={URLS.LICENSE} target="_blank">
        {t('footer.license')}
      </a>
      {children}
    </div>
  )
}

Footer.Github = () => {
  return (
    <div className="footer__github">
      <a href={URLS.REPO} target="_blank">
        Github
      </a>
      <a href={URLS.REPO} target="_blank">
        <FaGithub />
      </a>
    </div>
  )
}
