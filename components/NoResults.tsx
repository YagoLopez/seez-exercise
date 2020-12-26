import { useRouter } from 'next/router'
import css from '../public/styles/global.module.css'
import { CONST } from '../constants'

export const NoResults = ({ message }) => {
  const router = useRouter()
  const onGoBack = () => router.push('/')

  return (
    <div className={css.centerHorVer}>
      <p data-cy="no-results-msg">{message ?? CONST.NO_RESULTS}</p>
      <div>
        <a href="#" onClick={onGoBack}>
          ⇦ Go Back
        </a>
      </div>
    </div>
  )
}
