import Joke from '../models/Joke'
import { CONST } from '../constants'
import JokesRepository from './jokes.repository'

export class PaginationService {
  static isFirstPage = (currentPage: string) =>
    +currentPage <= 1 || currentPage === undefined

  static isLastPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) =>
    JokesRepository.getJokesByPage(totalJokeList, pageNumber, pageSize)
      .length === 0

  static goPreviousPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) => JokesRepository.getJokesByPage(totalJokeList, pageNumber - 1, pageSize)

  static goNextPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) => {
    debugger
    JokesRepository.getJokesByPage(totalJokeList, pageNumber + 1, pageSize)
  }

  static getNumberOfPages = (totalJokeList: Joke[]) =>
    Math.round(totalJokeList.length / CONST.JOKES_PER_PAGE)
}
