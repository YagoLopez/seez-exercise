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
  JOKES_PER_PAGE: 2,
  JOKES_SEARCH_RESULT: 'Jokes Search Results',
  NO_RESULTS: 'No results found',
  TITLE_INDEX: 'Chuck Norris Joke Search - Seez Exercise',
  PAGE_OUT_RANGE: 'Request is invalid or out of range',
  INPUT_SEARCH_HELP: 'Enter search terms',
  YOUTUBE_VID_URL: 'https://www.youtube.com/embed/',
  TOOLTIP_DETAIL_INFO: 'Click for more info',
  MOVIE_DETAILS_TITLE: 'Movie Details',
  PAGE_HEAD_DEFAULT_DESCRIPTION: 'Search Chuck Norris Jokes',
  PAGE_HEAD_DEFAULT_KEYWORDS:
    'Seez Exercise, Chuck Norris, Nextjs, React, SSR, Server-Side-Rendering, API',
  PAGE_HEAD_OG_URL: '',
  PAGE_HEAD_OG_IMAGE: '',
  URL_YAGO_LOPEZ: 'https://yagolopez.js.org',
  URL_GITHUB_PROJECT: 'https://github.com/YagoLopez/seez-exercise',
}
