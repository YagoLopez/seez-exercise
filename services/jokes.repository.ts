// todo: remove comments
import * as ErrorService from './errors.service'
import Joke from '../models/Joke'
import { CONST } from '../constants'

/**
 * Chuck Norris Jokes Repository Class
 * It follows the Repository Pattern
 * Encapsulates operations on 'Jokes'
 */
export default class JokesRepository {
  /**
   * Utiliy function to fetch data from endpoint
   * @param endpoint url
   */
  static getData = async (endpoint: string): Promise<Response> => {
    try {
      const response = await fetch(endpoint)
      return await response.json()
    } catch (exception) {
      return ErrorService.parseObj(exception)
    }
  }

  /**
   * Get a list of jokes per page given a list of total jokes
   * @param totalJokeList Total joke list
   * @param pageNumber Page number
   * @param pageSize Joke list per page
   */
  // static getJokesByPage = (
  //   totalJokeList: Joke[],
  //   pageNumber: number,
  //   pageSize: number
  // ): Joke[] => {
  //   if (pageNumber <= 0) return []
  //   return totalJokeList.slice(
  //     (pageNumber - 1) * pageSize,
  //     pageNumber * pageSize
  //   )
  // }

  // static isFirstPage = (currentPage: string) =>
  //   +currentPage <= 1 || currentPage === undefined
  //
  // static isLastPage = (
  //   totalJokeList: Joke[],
  //   pageNumber: number,
  //   pageSize: number
  // ) =>
  //   JokesRepository.getJokesByPage(totalJokeList, pageNumber, pageSize)
  //     .length === 0
  //
  // static goPreviousPage = (
  //   totalJokeList: Joke[],
  //   pageNumber: number,
  //   pageSize: number
  // ) => JokesRepository.getJokesByPage(totalJokeList, pageNumber - 1, pageSize)
  //
  // static goNextPage = (
  //   totalJokeList: Joke[],
  //   pageNumber: number,
  //   pageSize: number
  // ) => JokesRepository.getJokesByPage(totalJokeList, pageNumber + 1, pageSize)
  //
  // static getNumberOfPages = (totalJokeList: Joke[]) =>
  //   Math.round(totalJokeList.length / CONST.JOKES_PER_PAGE)

  // static getLastPageJokes = (totalJokeList: Joke[], pageNumber: number, pageSize: number): Joke[] => {
  //   JokesRepository.getJokesByPage(totalJokeList)
  // }

  /**
   * Get a Random Joke
   * @param endpoint Url
   */
  // static getRandomJoke = async (endpoint: string): Promise<Response> => {
  //   return await JokesRepository.getData(endpoint)
  // }

  /**
   * Get a random joke by category
   * @param category Joke Category
   * @param endpoint
   */
  // static getJokeByCategory = async (
  //   category: string,
  //   endpoint: string
  // ): Promise<Response> => await fetch(`${endpoint}${category}`)

  /**
   * Get a list of joke categories
   */
  // static getCategories = async (endpoint: string): Promise<Response> =>
  //   await JokesRepository.getData(endpoint)

  /**
   * Free search text
   * @param searchString
   */
  // static searchJokeByText = async (searchString: string): Promise<Response> =>
  //   await fetch(`CHUCK_NORRIS_JOKES_API_BASE_URL
  //     /search?query=${searchString}`)
}
