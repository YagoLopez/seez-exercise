import JokesRepository from '../../services/jokes.repository'
import { GetServerSideProps } from 'next'
import * as ErrorService from '../../services/errors.service'
import React, { FormEvent, useState } from 'react'
import { CONST, ENDPOINT } from '../../constants'
import { Select } from '@rmwc/select'
import { Button } from '@rmwc/button'
import css from '../../public/styles/global.module.css'
import { useRouter } from 'next/router'
import JokeListItem from '../../components/joke-list-item/JokeListItem'
import PageHead from '../../components/PageHead'
import { NoResults } from '../../components/NoResults'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  const data = category
    ? await JokesRepository.getData(
        `${ENDPOINT.RANDOM_JOKES_BY_CATEGORY}${category}`
      )
    : await JokesRepository.getData(`${ENDPOINT.RANDOM_JOKES}`)
  return {
    props: { data },
  }
}

export default function Random({ data, categories }) {
  if (ErrorService.isError(data)) return <NoResults message={data.message} />
  const [selectedCategory, setCategory] = useState('')
  const router = useRouter()

  const onSelectCategory = (evt: FormEvent) => {
    const category = (evt.currentTarget as HTMLSelectElement).value
    setCategory(category)
    router.push(`/random/${category}`)
  }

  const onSearchRandomJoke = (evt: FormEvent) => {
    evt.preventDefault()
    if (selectedCategory) {
      router.push(`/random/${selectedCategory}`)
    } else {
      router.push(`/random`)
    }
  }
  return (
    <>
      <PageHead title={CONST.RANDOM_JOKES_TITLE} />
      <form onSubmit={onSearchRandomJoke}>
        <label>
          <Select
            label="Categories"
            icon="input"
            options={categories}
            value={selectedCategory}
            onChange={onSelectCategory}
          />
        </label>
        <section className={css.jokeItemContainer}>
          <JokeListItem item={data} />
        </section>
        <div className={css.paginationCentered}>
          <Button theme={['secondaryBg', 'onSecondary']} raised type="submit">
            Get New Joke
          </Button>
        </div>
      </form>
    </>
  )
}
