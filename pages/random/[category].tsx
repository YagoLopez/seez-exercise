import JokesRepository from '../../services/jokes.repository'
import Joke from '../../models/Joke'
import { GetServerSideProps } from 'next'
import * as ErrorService from '../../services/errors.service'
import React, { FormEvent, useState } from 'react'
import JokeErrorCmp from '../../components/JokeErrorCmp'
import JokeErrorModel from '../../models/JokeError'
import Layout from '../../components/layout/Layout'
import { ENDPOINTS } from '../../constants'
import { Select } from '@rmwc/select'
import { LinearProgress } from '@rmwc/linear-progress'
import { Button } from '@rmwc/button'
import css from '../../public/styles/global.module.css'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  let data = null
  if (category === '[]' || category === '') {
    data = await JokesRepository.getData(`${ENDPOINTS.RANDOM_JOKES}`)
  } else {
    data = await JokesRepository.getData(
      `${ENDPOINTS.RANDOM_JOKES_BY_CATEGORY}${category}`
    )
  }
  const categories = await JokesRepository.getData(`${ENDPOINTS.CATEGORIES}`)
  return {
    props: { data, categories, category },
  }
}

export default function Random({ data, categories, category }) {
  console.log('category', category)
  // const { data, categories } = props
  if (ErrorService.isError(data)) return <JokeErrorCmp data={data} />

  const [selectedCategory, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSelectCategory = (evt: FormEvent) => {
    setCategory((evt.currentTarget as HTMLSelectElement).value)
    // setIsLoading(true)
  }
  console.log(selectedCategory)

  const onSearchRandomJoke = (evt: FormEvent) => {
    let searchUrl = ''
    evt.preventDefault()
    if (selectedCategory?.length > 0) {
      setIsLoading(true)
      router.push(`/random/${selectedCategory}`)
    }
  }

  return (
    <Layout>
      <form onSubmit={onSearchRandomJoke}>
        <Select
          label="Categories"
          options={categories}
          value={selectedCategory}
          onChange={(evt) => onSelectCategory(evt)}
        />
        <pre>{ErrorService.printJson(data)}</pre>
        <Button
          label="Search"
          theme={['secondaryBg', 'onSecondary']}
          raised
          type="submit"
        />
      </form>

      {/*{isLoading && <LinearProgress />}*/}
    </Layout>
  )
}
