// todo: unify state management in _app.tsx
// todo: use reactMemo https://reactjs.org/docs/react-api.html#reactmemo
// todo: improve lighthouse score in /random/[] route
// todo: improve lighthouse accesibility score
// todo: add types to react hooks
// todo: add go to first and goto last pagination btns
// todo: use SWR in JokesRepository to get cached results
// todo: check svg in index.tsx
// todo: e2e random jokes
// todo: use absolute imports and module path aliases
// todo: feature: add to favorites
// todo: use rmwc not importing styles in _app.tsx
import { NoResults } from '../../components/NoResults'
import { CONST, ENDPOINT } from '../../constants'
import PageHead from '../../components/PageHead'
import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import JokeList from '../../components/joke-list/JokeList'
import { useState } from 'react'
import { PaginationService } from '../../services/pagination.service'
import { isThereResults } from '../../services/errors.service'
import PaginationFooter from '../../components/PaginationFooter'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { terms } = context.query
  const JokesData = await JokesRepository.getData(
    `${ENDPOINT.SEARCH_JOKES}${terms[0]}`
  )
  return {
    props: {
      JokesData,
      searchString: terms[0],
      pageNumber: terms[1] ? terms[1] : 1,
    },
  }
}

export default function SearchTermsPage({ JokesData, searchString, pageNumber }) {
  const { result } = JokesData
  const totalPages = PaginationService.getNumberOfPages(result)
  if (!isThereResults(JokesData, +pageNumber, totalPages)) {
    return <NoResults message={JokesData.message} />
  }
  const router = useRouter()
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
    const nextPageNumber = +currentPage + delta
    const nextPageJokesList = PaginationService.getJokesPerPage(
      result,
      nextPageNumber,
      CONST.JOKES_PER_PAGE
    )
    setCurrentPage(nextPageNumber)
    setJokeList(nextPageJokesList)
    const paginatedSearchRoute = `/search/${searchString}/${nextPageNumber}`
    router.push(paginatedSearchRoute, undefined, { shallow: true })
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
      <JokeList list={jokeList} search={searchString} />
      <PaginationFooter paginationData={paginationData} />
    </>
  )
}
