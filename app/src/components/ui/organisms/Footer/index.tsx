import useYearRange from '@hooks/useYearRange'
import { FaGithub } from 'react-icons/fa'
import { URLS } from './constants'

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear()
  const yearRange = useYearRange(CURRENT_YEAR)

  return (
    <footer>
      <p>
        Copyright © <span>{yearRange}</span>,{' '}
        <a href={URLS.OWNER} target="_blank">
          Sergi Heras
        </a>
        <span> & </span>
        <a href={URLS.CONTRIBUTORS} target="_blank">
          Contributors
        </a>
      </p>
      <p>
        Released under the{' '}
        <a href={URLS.LICENSE} target="_blank">
          MIT License
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
