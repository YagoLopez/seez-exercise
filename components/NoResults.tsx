import { useRouter } from 'next/router'
import css from '../public/styles/global.module.css'
import Layout from './layout/Layout'
import { CONST } from '../constants'

export const NoResults = ({ message }) => {
  const router = useRouter()
  const onGoBack = () => router.push('/')

  return (
    <Layout>
      <div className={css.centerHorVer}>
        <p data-cy="no-results-msg">{message ?? CONST.PAGE_OUT_RANGE}</p>
        <div>
          <a href="#" onClick={onGoBack}>
            ⇦ Go Back
          </a>
        </div>
      </div>
    </Layout>
  )
}
