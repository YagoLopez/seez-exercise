import withApollo from '../../lib/apollo'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { NoResults } from '../../components/NoResults'
import { Pagination } from '../../components/movies-search/Pagination'
import { MovieList } from '../../components/movies-search/MovieList'
import { TopBar } from '../../components/TopBar'
import { CONST } from '../../constants'
import { GET_MOVIES } from '../../schemas'
import { LinearProgress } from '@rmwc/linear-progress'
import {
  getPageNumber,
  isPageNumberInRange,
} from '../../services/search.service'
import PageHead from '../../components/PageHead'

const Page = () => {
  const router = useRouter()
  const { searchterm, page } = router.query as {
    searchterm: string
    page: string
  }

  if (!isPageNumberInRange(page))
    return <NoResults message={CONST.PAGE_OUT_RANGE} />

  // Execute graphql query to search movies
  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: { searchterm, page: getPageNumber(page) },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <LinearProgress />
  if (error) return <NoResults message={error.message} />

  const { totalPages, results } = data?.allMovies
  const { images } = data?.configuration
  if (!isPageNumberInRange(page, totalPages))
    return <NoResults message={CONST.PAGE_OUT_RANGE} />
  if (totalPages === 0) return <NoResults message={CONST.NO_RESULTS} />
  return (
    <>
      <PageHead title={CONST.JOKES_SEARCH_RESULT} />
      {/*<TopBar title={'Movies Search Results'} showBackBtn={true} showHomeBtn={true} />*/}
      <div className="responsive-card">
        <MovieList listData={results} imageData={images} />
        {/*
        <Pagination
          page={page}
          totalPages={totalPages}
          searchterm={searchterm}
          getPageNumber={getPageNumber}
        />
*/}
      </div>
    </>
  )
}

export default withApollo({ ssr: true })(Page)
