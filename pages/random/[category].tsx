import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import * as ErrorService from '../../services/errors.service'
import React, { FormEvent, useEffect, useState } from 'react'
import JokeErrorCmp from '../../components/JokeErrorCmp'
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
  if (ErrorService.isError(data)) return <JokeErrorCmp data={data} />

  const [selectedCategory, setCategory] = useState('')
  const router = useRouter()

  const onSelectCategory = (evt: FormEvent) => {
    const category = (evt.currentTarget as HTMLSelectElement).value
    setCategory(category)
    router.push(`/random/${category}`)
  }

  const onSearchRandomJoke = (evt: FormEvent) => {
    if (selectedCategory !== '[]' && selectedCategory !== '') {
      router.push(`/random/${selectedCategory}`)
    } else {
      router.push(`/random/[]`)
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
        <div className={css.centerHor}>
          <Button
            label="Get New Joke"
            theme={['secondaryBg', 'onSecondary']}
            raised
            type="submit"
          />
        </div>
      </form>
    </Layout>
  )
}
