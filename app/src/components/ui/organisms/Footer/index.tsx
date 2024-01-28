import { FaGithub } from 'react-icons/fa'

import { URLS } from './constants'
import useYearRange from '@hooks/useYearRange'
import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear()
  const yearRange = useYearRange(CURRENT_YEAR)

  const language = getLangFromWindowUrl()
  const t = useTranslations(language)

  return (
    <footer className="col-span-4 col-start-2 row-start-5 flex flex-col justify-center border-y-2 border-slate-200 text-xl">
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
      <div>
        {t('footer.release_license')}{' '}
        <a href={URLS.LICENSE} target="_blank">
          {t('footer.license')}
        </a>
        <div>
          <a href={URLS.REPO} target="_blank">
            <FaGithub />
          </a>

          <a href={URLS.REPO} target="_blank">
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
