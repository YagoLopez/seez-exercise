// todo: remove comments and unused imports
import { NoResults } from '../../components/NoResults'
import { Pagination } from '../../components/movies-search/Pagination'
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
  // debugger
  const { terms } = context.query
  const data = await JokesRepository.getData(
    `${ENDPOINTS.SEARCH_JOKES}${terms[0]}`
  )
  // console.log(terms[1])

  return {
    props: {
      data,
      pageNumber: terms[1] ? terms[1] : '',
    },
  }
}

export default function Terms({ data, pageNumber }) {
  // console.log(data)
  const { result } = data
  const [state, setState] = useState(
    PaginationService.getJokesByPage(result, 1, CONST.JOKES_PER_PAGE)
  )

  // if (loading) return <LinearProgress />
  // if (error) return <NoResults message={error.message} />

  // const { totalPages, results } = data?.allMovies
  // const { images } = data?.configuration

  // if (!isPageNumberInRange(pageNumber, totalPages))
  //   return <NoResults message={CONST.PAGE_OUT_RANGE} />
  // if (totalPages === 0) return <NoResults message={CONST.NO_RESULTS} />

  const isFirstPage = PaginationService.isFirstPage(pageNumber)
  const pageSize = CONST.JOKES_PER_PAGE
  const isLastPage = PaginationService.isLastPage(
    result,
    pageNumber,
    CONST.JOKES_PER_PAGE
  )
  const goNextPage = PaginationService.goNextPage
  const goPreviousPage = PaginationService.goPreviousPage

  return (
    <Layout>
      <button
        onClick={() => {
          setState([])
        }}>
        boton
      </button>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      {/*<JokeList data={data} page={pageNumber} />*/}
      <pre>{printJson(state)}</pre>

      {/*
      <Pagination
        totalJokeList={result}
        pageNumber={pageNumber}
        pageSize={CONST.JOKES_PER_PAGE}
      />
*/}

      <div className={style.paginationCentered}>
        <div>
          {!isFirstPage && (
            <Button
              raised
              data-cy="prev-btn"
              className={style.paginationBtn}
              label="Prev Page"
              icon="keyboard_arrow_left"
              onClick={() =>
                goPreviousPage(result, pageNumber, CONST.JOKES_PER_PAGE)
              }
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
              onClick={() =>
                goNextPage(result, pageNumber, CONST.JOKES_PER_PAGE)
              }
              disabled={isLastPage}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
        </div>
        <div>
          <div data-cy="current-page" className={style.paginationFooter}>
            Current page: {pageNumber}
          </div>
          <div data-cy="total-pages" className={style.paginationFooter}>
            Total pages: {PaginationService.getNumberOfPages(result)}
          </div>
          <div data-cy="total-jokes" className={style.paginationFooter}>
            Total jokes: {result.length}
          </div>
        </div>
      </div>
    </Layout>
  )
}
