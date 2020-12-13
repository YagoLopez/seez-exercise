import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { CONST } from '../constants'
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { openExternalLink } from '../services/movie.service'
import css from '../public/styles/global.module.css'
import PageHead from '../components/PageHead'
import Layout from '../components/layout/Layout'

const Index = () => {
  const router = useRouter()
  const [searchterm, setSearchterm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSearchMovie = (evt: FormEvent) => {
    evt.preventDefault()
    searchterm.trim()
    if (searchterm?.length > 0) {
      setIsLoading(true)
      router.push(`/movies-search/${searchterm}?page=1`)
    }
  }

  return (
    <Layout>
      <PageHead title={CONST.TITLE_INDEX} />
      {isLoading && <LinearProgress />}
      <form onSubmit={onSearchMovie} className={css.form}>
        <main className={css.centerHor}>
          <label>
            <div className={css.blockText}>
              <div>
                <Typography use="headline6">🎞️ Chuck Norris Jokes</Typography>
              </div>
              <div>
                <Typography use="body1">For example: "Contact"</Typography>
              </div>
            </div>
            <TextField
              icon="search"
              value={searchterm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchterm(e.target.value)
              }
              label={CONST.INPUT_SEARCH_PLACEHOLDER}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => setSearchterm(''),
              }}
            />
            <div className={css.submitBtn}>
              <Button
                label="Search"
                theme={['secondaryBg', 'onSecondary']}
                raised
                type="submit"
              />
            </div>
          </label>
          <div className={css.blockText}>
            <div>
              <Typography use="caption">
                This app uses "The Movie Database GraphQL API":
              </Typography>
            </div>
            <div>
              <a
                href={CONST.URL_TMDB_GRAPHQL_API}
                target="_blank"
                className={css.link}
                rel="noopener noreferrer">
                https://tmdb-graphql.com
              </a>
            </div>
            <div className={css.footerLinksContainer}>
              <div>
                <a
                  href={CONST.URL_YAGO_LOPEZ}
                  target="_blank"
                  className={css.link}
                  rel="noopener noreferrer">
                  Developed by Yago López
                </a>
              </div>
              <div>
                <a
                  href={CONST.URL_GITHUB_PROJECT}
                  target="_blank"
                  className={css.link}
                  rel="noopener noreferrer">
                  GitHub Project Address
                </a>
              </div>
            </div>
          </div>
        </main>
      </form>
    </Layout>
  )
}

export default Index
