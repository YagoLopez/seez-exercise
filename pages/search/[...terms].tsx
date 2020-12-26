// todo: better use of layout
// todo: create footer cmp for pagination btns
// todo: input search term validation in browser
// todo: use error boundaries to catch errors in _app.jsx
// todo: improve lighthouse accesibility score
// todo: update dependencies
import { NoResults } from '../../components/NoResults'
import { CONST, ENDPOINTS } from '../../constants'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import style from '../../public/styles/global.module.css'
import { Button } from '@rmwc/button'
import { PaginationService } from '../../services/pagination.service'
import { isError } from '../../services/errors.service'

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

export default function SearchTermsPage({ data, pageNumber }) {
  const { result } = data
  const totalPages = PaginationService.getNumberOfPages(result)
  if (
    isError(data) ||
    !PaginationService.isPageNumberValid(pageNumber, totalPages)
  )
    return <NoResults message={data.message} />

  const [currentPage, setCurrentPage] = useState(+pageNumber)
  const [jokeList, setJokeList] = useState(
    PaginationService.getJokesPerPage(result, currentPage, CONST.JOKES_PER_PAGE)
  )
  const isFirstPage = PaginationService.isFirstPage(currentPage)
  const isLastPage = PaginationService.isLastPage(
    result,
    currentPage,
    CONST.JOKES_PER_PAGE
  )
  const goNextPrevPage = (delta: number) => {
    const nextPageJokeList = PaginationService.getJokesPerPage(
      result,
      currentPage + delta,
      CONST.JOKES_PER_PAGE
    )
    setCurrentPage(+currentPage + delta)
    setJokeList(nextPageJokeList)
  }

  return (
    <Layout>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      <JokeList list={jokeList} />

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
            Current page: {currentPage}
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
