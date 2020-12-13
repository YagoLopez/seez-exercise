import JokesRepository from './jokes.repository'

const jokeList = [
  {
    categories: ['explicit'],
    created_at: '2020-01-05 13:42:18.823766',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'RX3L0rCGRc6pSCzghxzL3g',
    updated_at: '2020-01-05 13:42:18.823766',
    url: 'https://api.chucknorris.io/jokes/RX3L0rCGRc6pSCzghxzL3g',
    value:
      'Horses have long faces because they keep challenging Chuck Norris to "whos got the biggest dick" contests.',
  },
  {
    categories: ['dev'],
    created_at: '2020-01-05 13:42:19.104863',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '7ver3y48qqsfktpelir7ua',
    updated_at: '2020-01-05 13:42:19.104863',
    url: 'https://api.chucknorris.io/jokes/7ver3y48qqsfktpelir7ua',
    value:
      "Don't worry about tests, Chuck Norris's test cases cover your code too.",
  },
  {
    categories: ['explicit'],
    created_at: '2020-01-05 13:42:19.104863',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'br0nodo6sl2q1u_i2s6uja',
    updated_at: '2020-01-05 13:42:19.104863',
    url: 'https://api.chucknorris.io/jokes/br0nodo6sl2q1u_i2s6uja',
    value:
      'For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.',
  },
  {
    categories: ['explicit'],
    created_at: '2020-01-05 13:42:19.104863',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'axtqqerhrm2lredluq1suw',
    updated_at: '2020-01-05 13:42:19.104863',
    url: 'https://api.chucknorris.io/jokes/axtqqerhrm2lredluq1suw',
    value:
      'Chuck Norris once challenged Lance Armstrong in a "Who has more testicles?" contest. Chuck Norris won by 5.',
  },
  {
    categories: ['dev'],
    created_at: '2020-01-05 13:42:19.104863',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'rmmcukl2t6sottj2rvuuvg',
    updated_at: '2020-01-05 13:42:19.104863',
    url: 'https://api.chucknorris.io/jokes/rmmcukl2t6sottj2rvuuvg',
    value:
      'Chuck Norris can unit test entire applications with a single assert.',
  },
  {
    categories: [],
    created_at: '2020-01-05 13:42:19.324003',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '0au2_sUSSx6b0Q_msjlGGg',
    updated_at: '2020-01-05 13:42:19.324003',
    url: 'https://api.chucknorris.io/jokes/0au2_sUSSx6b0Q_msjlGGg',
    value:
      'Whwn steaming clams, Chuck Norris boils the water by dipping his testicles into the pot. This of course also gives the clams their incredible flavor.',
  },
  {
    categories: [],
    created_at: '2020-01-05 13:42:19.324003',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '9lt_txy7txscuxsyfhb--g',
    updated_at: '2020-01-05 13:42:19.324003',
    url: 'https://api.chucknorris.io/jokes/9lt_txy7txscuxsyfhb--g',
    value:
      'After taking a steroids test doctors informed Chuck Norris that he had tested positive. He laughed upon receiving this information, and said "of course my urine tested positive, what do you think they make steroids from?"',
  },
  {
    categories: ['dev'],
    created_at: '2020-01-05 13:42:19.324003',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'mhmp-zhqszwuimbxfbkx8q',
    updated_at: '2020-01-05 13:42:19.324003',
    url: 'https://api.chucknorris.io/jokes/mhmp-zhqszwuimbxfbkx8q',
    value:
      "Chuck Norris's programs can pass the Turing Test by staring at the interrogator.",
  },
  {
    categories: ['dev'],
    created_at: '2020-01-05 13:42:19.324003',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'e2gyguu0tg6di7-qykdjnw',
    updated_at: '2020-01-05 13:42:19.324003',
    url: 'https://api.chucknorris.io/jokes/e2gyguu0tg6di7-qykdjnw',
    value:
      'Chuck Norris originally appeared in the "Street Fighter II" video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked about this glitch, Norris replied "That\'s no glitch."',
  },
]

const getJokesPerPage = JokesRepository.getJokesByPage

describe('Test jokes pagination', () => {
  describe('Case 1: total number of elements (9) is divisible by page size (3)', () => {
    const pageSize = 3

    it('should return first page of jokes', () => {
      const expectedRes = [
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:18.823766',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'RX3L0rCGRc6pSCzghxzL3g',
          updated_at: '2020-01-05 13:42:18.823766',
          url: 'https://api.chucknorris.io/jokes/RX3L0rCGRc6pSCzghxzL3g',
          value:
            'Horses have long faces because they keep challenging Chuck Norris to "whos got the biggest dick" contests.',
        },
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: '7ver3y48qqsfktpelir7ua',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/7ver3y48qqsfktpelir7ua',
          value:
            "Don't worry about tests, Chuck Norris's test cases cover your code too.",
        },
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'br0nodo6sl2q1u_i2s6uja',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/br0nodo6sl2q1u_i2s6uja',
          value:
            'For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.',
        },
      ]
      const res = getJokesPerPage(jokeList, 1, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return second page of jokes', () => {
      const expectedRes = [
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'axtqqerhrm2lredluq1suw',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/axtqqerhrm2lredluq1suw',
          value:
            'Chuck Norris once challenged Lance Armstrong in a "Who has more testicles?" contest. Chuck Norris won by 5.',
        },
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'rmmcukl2t6sottj2rvuuvg',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/rmmcukl2t6sottj2rvuuvg',
          value:
            'Chuck Norris can unit test entire applications with a single assert.',
        },
        {
          categories: [],
          created_at: '2020-01-05 13:42:19.324003',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: '0au2_sUSSx6b0Q_msjlGGg',
          updated_at: '2020-01-05 13:42:19.324003',
          url: 'https://api.chucknorris.io/jokes/0au2_sUSSx6b0Q_msjlGGg',
          value:
            'Whwn steaming clams, Chuck Norris boils the water by dipping his testicles into the pot. This of course also gives the clams their incredible flavor.',
        },
      ]
      const res = getJokesPerPage(jokeList, 2, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return last page of jokes', () => {
      const expectedRes = [
        {
          categories: [],
          created_at: '2020-01-05 13:42:19.324003',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: '9lt_txy7txscuxsyfhb--g',
          updated_at: '2020-01-05 13:42:19.324003',
          url: 'https://api.chucknorris.io/jokes/9lt_txy7txscuxsyfhb--g',
          value:
            'After taking a steroids test doctors informed Chuck Norris that he had tested positive. He laughed upon receiving this information, and said "of course my urine tested positive, what do you think they make steroids from?"',
        },
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.324003',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'mhmp-zhqszwuimbxfbkx8q',
          updated_at: '2020-01-05 13:42:19.324003',
          url: 'https://api.chucknorris.io/jokes/mhmp-zhqszwuimbxfbkx8q',
          value:
            "Chuck Norris's programs can pass the Turing Test by staring at the interrogator.",
        },
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.324003',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'e2gyguu0tg6di7-qykdjnw',
          updated_at: '2020-01-05 13:42:19.324003',
          url: 'https://api.chucknorris.io/jokes/e2gyguu0tg6di7-qykdjnw',
          value:
            'Chuck Norris originally appeared in the "Street Fighter II" video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked about this glitch, Norris replied "That\'s no glitch."',
        },
      ]
      const res = getJokesPerPage(jokeList, 3, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return empty when page number out of range', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, 4, pageSize)
      expect(res).toStrictEqual([])
    })

    it('should return empty when page number is negative', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, -1, pageSize)
      expect(res).toStrictEqual([])
    })

    it('should return empty when page number is zero', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, 0, pageSize)
      expect(res).toStrictEqual([])
    })
  })

  describe('Case 2: total number of elements (9) is not divisible by page size (2)', () => {
    const pageSize = 2

    it('should return first page of jokes', () => {
      const expectedRes = [
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:18.823766',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'RX3L0rCGRc6pSCzghxzL3g',
          updated_at: '2020-01-05 13:42:18.823766',
          url: 'https://api.chucknorris.io/jokes/RX3L0rCGRc6pSCzghxzL3g',
          value:
            'Horses have long faces because they keep challenging Chuck Norris to "whos got the biggest dick" contests.',
        },
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: '7ver3y48qqsfktpelir7ua',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/7ver3y48qqsfktpelir7ua',
          value:
            "Don't worry about tests, Chuck Norris's test cases cover your code too.",
        },
      ]
      const res = getJokesPerPage(jokeList, 1, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return second page of jokes', () => {
      const expectedRes = [
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'br0nodo6sl2q1u_i2s6uja',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/br0nodo6sl2q1u_i2s6uja',
          value:
            'For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.',
        },
        {
          categories: ['explicit'],
          created_at: '2020-01-05 13:42:19.104863',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'axtqqerhrm2lredluq1suw',
          updated_at: '2020-01-05 13:42:19.104863',
          url: 'https://api.chucknorris.io/jokes/axtqqerhrm2lredluq1suw',
          value:
            'Chuck Norris once challenged Lance Armstrong in a "Who has more testicles?" contest. Chuck Norris won by 5.',
        },
      ]
      const res = getJokesPerPage(jokeList, 2, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return last page of jokes', () => {
      const expectedRes = [
        {
          categories: ['dev'],
          created_at: '2020-01-05 13:42:19.324003',
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'e2gyguu0tg6di7-qykdjnw',
          updated_at: '2020-01-05 13:42:19.324003',
          url: 'https://api.chucknorris.io/jokes/e2gyguu0tg6di7-qykdjnw',
          value:
            'Chuck Norris originally appeared in the "Street Fighter II" video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked about this glitch, Norris replied "That\'s no glitch."',
        },
      ]
      const res = getJokesPerPage(jokeList, 5, pageSize)
      expect(res).toStrictEqual(expectedRes)
    })

    it('should return empty when page number out of range', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, 100, pageSize)
      expect(res).toStrictEqual([])
    })

    it('should return empty when page number is negative', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, -1, pageSize)
      expect(res).toStrictEqual([])
    })

    it('should return empty when page number is zero', () => {
      const expectedRes = []
      const res = getJokesPerPage(jokeList, 0, pageSize)
      expect(res).toStrictEqual([])
    })
  })
})
