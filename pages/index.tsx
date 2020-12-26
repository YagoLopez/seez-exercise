import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { CONST, ENDPOINTS } from '../constants'
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import css from '../public/styles/global.module.css'
import PageHead from '../components/PageHead'
import Layout from '../components/layout/Layout'
import { GetStaticProps } from 'next'
import JokesRepository from '../services/jokes.repository'

export default function Index() {
  const router = useRouter()
  const [searchterm, setSearchterm] = useState('')

  const onSearchJoke = (evt: FormEvent) => {
    let searchUrl = ''
    evt.preventDefault()
    searchterm.trim()
    if (searchterm?.length > 0) {
      router.push(`/search/${searchterm}`)
    }
  }

  return (
    <>
      <PageHead title={CONST.TITLE_INDEX} />
      <form onSubmit={onSearchJoke} className={css.form}>
        <main className={css.centerHor}>
          <label>
            <div className={css.blockText}>
              <div>
                <Typography use="headline6">
                  {CONST.SEARCH_FORM_TITLE}
                </Typography>
              </div>
              <div>
                <Typography use="body1">For example: "fight"</Typography>
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
    </>
  )
}
