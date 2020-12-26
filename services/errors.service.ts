import JokeError from '../models/JokeError'
import Joke from '../models/Joke'
import { PaginationService } from './pagination.service'

export const isError = (data: Joke & JokeError) => !!(data.error || data.errno)

export const parseObj = (result: Object) => JSON.parse(JSON.stringify(result))

export const printJson = (jsonData: object) => JSON.stringify(jsonData, null, 2)

export const isThereResults = (
  jokeData: Joke & JokeError,
  pageNumber: string,
  totalPages: number
): boolean =>
  !isError(jokeData) &&
  PaginationService.isPageNumberValid(pageNumber, totalPages)
