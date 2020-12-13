// todo: add types
import { printJson } from '../../services/errors.service'
import Joke from '../../models/Joke'
import { CONST } from '../../constants'
import { PaginationService } from '../../services/pagination.service'

export default function JokeList({ data, page }) {
  const { result, total } = data
  const pageNumber: number = page ? +page : 1
  const jokes: Joke[] = PaginationService.getJokesByPage(
    result,
    pageNumber,
    CONST.JOKES_PER_PAGE
  )
  // console.log(data, page)
  // console.log('jokes', jokes)
  // console.log('data', data)
  // console.log('page', page)
  return (
    <>
      <h1>joke list</h1>
      {jokes.map((joke: Joke, index: number) => {
        return <pre key={index}>{printJson(joke)}</pre>
      })}
    </>
  )
}
