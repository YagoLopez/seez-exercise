// todo: input search term validation in browser
// todo: use error boundaries to catch errors in _app.jsx
// todo: improve lighthouse accesibility score
// todo: update dependencies
// todo: add types to react hooks
// todo: create fn to check for error or page out of range
// todo: improve loader
// todo: try to use rtl global variable only in _app.tsx
// todo: change browser and service worker icons
// todo: include search string in search results
import { NoResults } from '../../components/NoResults'
import { CONST, ENDPOINTS } from '../../constants'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import { useState } from 'react'
import { PaginationService } from '../../services/pagination.service'
import { isError } from '../../services/errors.service'
import PaginationFooter from '../../components/PaginationFooter'

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

  const paginationData = {
    isFirstPage,
    isLastPage,
    goNextPrevPage,
    currentPage,
    totalPages,
    totalJokes: result,
  }

  return (
    <>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      <JokeList list={jokeList} />
      <PaginationFooter paginationData={paginationData} />
    </>
  )
}
