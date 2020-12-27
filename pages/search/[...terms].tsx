// todo: change browser and service worker icons
// todo: input search term validation in browser
// todo: use error boundaries to catch errors in _app.jsx
// todo: improve lighthouse accesibility score
// todo: add types to react hooks
import { NoResults } from '../../components/NoResults'
import { CONST, ENDPOINTS } from '../../constants'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import { useState } from 'react'
import { PaginationService } from '../../services/pagination.service'
import { isThereResults } from '../../services/errors.service'
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
      searchTerm: terms[0],
    },
  }
}

export default function SearchTermsPage({ data, pageNumber, searchTerm }) {
  const { result } = data
  const totalPages = PaginationService.getNumberOfPages(result)
  if (!isThereResults(data, pageNumber, totalPages)) {
    return <NoResults message={data.message} />
  }

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
      <JokeList list={jokeList} search={searchTerm} />
      <PaginationFooter paginationData={paginationData} />
    </>
  )
}
