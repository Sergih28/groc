import useYearRange from '@hooks/useYearRange'
import { FaGithub } from 'react-icons/fa'
import { URLS } from './constants'
import { useTranslations, getLangFromWindowUrl } from '@i18n/utils'

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear()
  const yearRange = useYearRange(CURRENT_YEAR)

  const language = getLangFromWindowUrl()
  const t = useTranslations(language)

  return (
    <footer>
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
      <p>
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
      </p>
    </footer>
  )
}

export default Footer
