/**
 * JokeError Model
 * Thrown trying to fetch data from api
 */
export default interface JokeError {
  timestamp?: string
  status?: string
  error?: string
  message: string
  path?: string
  type?: string
  errno?: string
  code?: string
  stack?: string
}
