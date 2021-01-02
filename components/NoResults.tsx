import css from '../public/styles/global.module.css'
import { CONST } from '../constants'
import Link from 'next/link'

export const NoResults = ({ message }) => {
  return (
    <div className={css.centerHorVer}>
      <p className={css.textAlignCenter} data-cy="no-results-msg">
        {message ?? CONST.NO_RESULTS}
      </p>
      <Link href="/" shallow={true}>
        <a>⇦ Go Back</a>
      </Link>
    </div>
  )
}
