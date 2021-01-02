import JokeError from '../models/JokeError'

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
  static getData = async (endpoint: string): Promise<object[] | JokeError> => {
    try {
      const response = await fetch(endpoint)
      return await response.json()
    } catch (exception) {
      return { message: exception.message, error: exception.message }
    }
  }
}
