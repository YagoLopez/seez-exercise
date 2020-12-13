import JokeError from '../models/JokeError'
import Joke from '../models/Joke'

export const isError = (data: Joke & JokeError) => !!(data.error || data.errno)

export const parseObj = (result: Object) => JSON.parse(JSON.stringify(result))

export const printJson = (jsonData: object) => JSON.stringify(jsonData, null, 2)
