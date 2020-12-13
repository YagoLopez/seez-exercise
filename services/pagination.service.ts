import Joke from '../models/Joke'
import { CONST } from '../constants'
import JokesRepository from './jokes.repository'

export class PaginationService {
  /**
   * Get a list of jokes per page given a list of total jokes
   * @param totalJokeList Total joke list
   * @param pageNumber Page number
   * @param pageSize Joke list per page
   */
  static getJokesByPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ): Joke[] => {
    if (pageNumber <= 0) return []
    return totalJokeList.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    )
  }

  static isFirstPage = (currentPage: string) =>
    +currentPage <= 1 || currentPage === undefined

  static isLastPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) =>
    PaginationService.getJokesByPage(totalJokeList, pageNumber, pageSize)
      .length === 0

  static goPreviousPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) => PaginationService.getJokesByPage(totalJokeList, pageNumber - 1, pageSize)

  static goNextPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) => {
    debugger
    PaginationService.getJokesByPage(totalJokeList, pageNumber + 1, pageSize)
  }

  static getNumberOfPages = (totalJokeList: Joke[]) =>
    Math.round(totalJokeList.length / CONST.JOKES_PER_PAGE)
}
