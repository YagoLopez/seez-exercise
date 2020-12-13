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
    </Layout>
  )
}
