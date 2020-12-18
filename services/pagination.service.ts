import Joke from '../models/Joke'
import { CONST } from '../constants'

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

  static isFirstPage = (currentPage: number) =>
    currentPage <= 1 || currentPage === undefined

  static isLastPage = (
    totalJokeList: Joke[],
    pageNumber: number,
    pageSize: number
  ) =>
    PaginationService.getJokesByPage(totalJokeList, pageNumber + 1, pageSize)
      .length === 0

  static getNumberOfPages = (totalJokeList: Joke[]) => {
    const totalNumberOfPages = Math.floor(
      totalJokeList.length / CONST.JOKES_PER_PAGE
    )
    const totalNumberOfPagesRest = totalJokeList.length % CONST.JOKES_PER_PAGE
    return totalNumberOfPagesRest > 0
      ? totalNumberOfPages + 1
      : totalNumberOfPages
  }

  static isPageNumberValid = (
    pageNumber: string,
    totalPages: number
  ): boolean => {
    if (isNaN(parseInt(pageNumber))) return false
    return !(+pageNumber > totalPages || +pageNumber <= 0)
  }
}
