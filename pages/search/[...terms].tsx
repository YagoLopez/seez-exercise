// todo: remove comments and unused imports
import { NoResults } from '../../components/NoResults'
import { Pagination } from '../../components/movies-search/Pagination'
import { MovieList } from '../../components/movies-search/MovieList'
import { CONST, ENDPOINTS } from '../../constants'
import { LinearProgress } from '@rmwc/linear-progress'
import {
  getPageNumber,
  isPageNumberInRange,
} from '../../services/search.service'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { parseObj, printJson } from '../../services/errors.service'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import Layout from '../../components/layout/Layout'
import style from '../../public/styles/global.module.css'
import { Button } from '@rmwc/button'

export const getServerSideProps: GetServerSideProps = async (context) => {
  // debugger
  const { terms } = context.query
  const data = await JokesRepository.getData(
    `${ENDPOINTS.SEARCH_JOKES}${terms[0]}`
  )
  // console.log(terms[1])

  return {
    props: {
      data,
      page: terms[1] ? terms[1] : '',
    },
  }
}

export default function Terms({ data, page }) {
  // console.log(data)

  const { result } = data

  const isFirstPage = (currentPage: string) =>
    +currentPage <= 1 || currentPage === undefined

  const isLastPage = (currentPage: string, totalPages: string) =>
    +currentPage >= +totalPages

  const goNextPage = (currentPage: string, totalPages: string) => {
    if (!isLastPage(currentPage, totalPages)) {
    }
  }

  const goPreviousPage = (currentPage: string) => {
    if (!isFirstPage(currentPage)) {
    }
  }

  // if (loading) return <LinearProgress />
  // if (error) return <NoResults message={error.message} />

  // const { totalPages, results } = data?.allMovies
  // const { images } = data?.configuration

  // if (!isPageNumberInRange(page, totalPages))
  //   return <NoResults message={CONST.PAGE_OUT_RANGE} />
  // if (totalPages === 0) return <NoResults message={CONST.NO_RESULTS} />
  return (
    <Layout>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      <JokeList data={data} page={page} />
      <Pagination
        totalJokeList={data.result}
        pageNumber={page}
        pageSize={CONST.JOKES_PER_PAGE}
      />
      {/*<pre>{printJson(data)}</pre>*/}

      {/*
      <div className={style.paginationCentered}>
        <div>
          {!isFirstPage(page) && (
            <Button
              raised
              data-cy="prev-btn"
              className={style.paginationBtn}
              label="Prev Page"
              icon="keyboard_arrow_left"
              onClick={() => goPreviousPage(page)}
              disabled={isFirstPage(page)}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
          {!isLastPage(page, result.length) && (
            <Button
              raised
              data-cy="next-btn"
              className={style.paginationBtn}
              label="Next Page"
              trailingIcon="keyboard_arrow_right"
              onClick={() => goNextPage(page, result.length)}
              disabled={isLastPage(page, result.length)}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
        </div>
        <div>
          <div data-cy="current-page" className={style.paginationFooter}>
            Current page: {page}
          </div>
          <div data-cy="total-pages" className={style.paginationFooter}>
            Total pages: {result.length}
          </div>
        </div>
      </div>
*/}
    </Layout>
  )
}
