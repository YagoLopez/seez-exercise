// todo: remove comments and unused imports
import { NoResults } from '../../components/NoResults'
// import { Pagination } from '../../components/movies-search/Pagination'
import { CONST, ENDPOINTS } from '../../constants'
import { LinearProgress } from '@rmwc/linear-progress'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import Joke from '../../models/Joke'
import { printJson } from '../../services/errors.service'
import style from '../../public/styles/global.module.css'
import { Button } from '@rmwc/button'
import { PaginationService } from '../../services/pagination.service'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { terms } = context.query
  const data = await JokesRepository.getData(
    `${ENDPOINTS.SEARCH_JOKES}${terms[0]}`
  )
  return {
    props: {
      data,
      pageNumber: terms[1] ? terms[1] : 1,
    },
  }
}

export default function Terms({ data, pageNumber }) {
  const { result } = data
  const totalPages = PaginationService.getNumberOfPages(result)
  if (!PaginationService.isPageNumberValid(pageNumber, totalPages))
    return <NoResults message={CONST.PAGE_OUT_RANGE} />

  const [pageNumberState, setPageNumber] = useState(+pageNumber)
  const [state, setState] = useState(
    PaginationService.getJokesByPage(
      result,
      pageNumberState,
      CONST.JOKES_PER_PAGE
    )
  )
  const isFirstPage = PaginationService.isFirstPage(pageNumberState)
  const isLastPage = PaginationService.isLastPage(
    result,
    pageNumberState,
    CONST.JOKES_PER_PAGE
  )
  const goNextPrevPage = (delta: number) => {
    const jokesNextPage = PaginationService.getJokesByPage(
      result,
      pageNumberState + delta,
      CONST.JOKES_PER_PAGE
    )
    setPageNumber(+pageNumberState + delta)
    setState(jokesNextPage)
  }

  return (
    <Layout>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      <JokeList list={state} />

      <div className={style.paginationCentered}>
        <div>
          {!isFirstPage && (
            <Button
              raised
              data-cy="prev-btn"
              className={style.paginationBtn}
              label="Prev Page"
              icon="keyboard_arrow_left"
              onClick={() => goNextPrevPage(-1)}
              disabled={isFirstPage}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
          {!isLastPage && (
            <Button
              raised
              data-cy="next-btn"
              className={style.paginationBtn}
              label="Next Page"
              trailingIcon="keyboard_arrow_right"
              onClick={() => goNextPrevPage(+1)}
              disabled={isLastPage}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
        </div>
        <div>
          <div data-cy="current-page" className={style.paginationFooter}>
            Current page: {pageNumberState}
          </div>
          <div data-cy="total-pages" className={style.paginationFooter}>
            Total pages: {totalPages}
          </div>
          <div data-cy="total-jokes" className={style.paginationFooter}>
            Total jokes: {result.length}
          </div>
        </div>
      </div>
    </Layout>
  )
}
