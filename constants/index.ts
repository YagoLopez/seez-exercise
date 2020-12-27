const CHUCK_NORRIS_JOKES_API_BASE_URL = 'https://api.chucknorris.io/jokes'

export const ENDPOINTS = {
  RANDOM_JOKES: `${CHUCK_NORRIS_JOKES_API_BASE_URL}/random`,
  RANDOM_JOKES_BY_NAME: `${CHUCK_NORRIS_JOKES_API_BASE_URL}/random?name=`,
  RANDOM_JOKES_BY_CATEGORY: `${CHUCK_NORRIS_JOKES_API_BASE_URL}/random?category=`,
  CATEGORIES: `${CHUCK_NORRIS_JOKES_API_BASE_URL}/categories`,
  SEARCH_JOKES: `${CHUCK_NORRIS_JOKES_API_BASE_URL}/search?query=`,
}

export const CONST = {
  APP_TITLE: 'Seez Exercise',
  INPUT_SEARCH_PLACEHOLDER: 'Search Terms',
  JOKES_PER_PAGE: 10,
  JOKES_SEARCH_RESULT: 'Search Results',
  TITLE_INDEX: 'Chuck Norris Joke Search - Seez Exercise',
  SEARCH_FORM_TITLE: 'Search for Chuck Norris Jokes',
  NO_RESULTS: 'No results found for this request',
  INPUT_SEARCH_HELP: 'Enter search terms',
  PAGE_HEAD_DEFAULT_DESCRIPTION: 'Search Chuck Norris Jokes',
  PAGE_HEAD_DEFAULT_KEYWORDS:
    'Seez Exercise, Chuck Norris, Nextjs, React, SSR, Server-Side-Rendering, API',
  PAGE_HEAD_OG_URL: '',
  PAGE_HEAD_OG_IMAGE: '',
  URL_YAGO_LOPEZ: 'https://yagolopez.js.org',
  URL_GITHUB_PROJECT: 'https://github.com/YagoLopez/seez-exercise',
  DRAWER_TITLE: 'Chuck Norries Jokes',
  DRAWER_SUBTITLE: 'Seez Exercise',
}
