import * as ErrorService from './errors.service'

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
}
