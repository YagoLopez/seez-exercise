import JokesRepository from '../services/jokes.repository'
import Joke from '../models/Joke'
import { GetStaticProps } from 'next'
import * as ErrorService from '../services/errors.service'
import React from 'react'
import JokeErrorCmp from '../components/JokeErrorCmp'
import JokeErrorModel from '../models/JokeError'
import Layout from '../components/layout/Layout'
import { ENDPOINTS } from '../constants'

export const getStaticProps: GetStaticProps = async () => {
  const data = await JokesRepository.getData(`${ENDPOINTS.RANDOM_JOKES}`)
  return {
    props: { data },
  }
}

export default function Random(props: { data: Joke & JokeErrorModel }) {
  const { data } = props
  if (ErrorService.isError(data)) return <JokeErrorCmp data={data} />
  return (
    <Layout>
      <pre>{ErrorService.printJson(data)}</pre>
    </Layout>
  )
}
