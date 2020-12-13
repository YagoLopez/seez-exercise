// todo: add types
import { printJson } from '../../services/errors.service'
import Joke from '../../models/Joke'
import JokesRepository from '../../services/jokes.repository'
import { CONST } from '../../constants'

export default function JokeList({ data, page }) {
  const { result, total } = data
  const pageNumber: number = page ? +page : 1
  const jokes: Joke[] = JokesRepository.getJokesByPage(
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
