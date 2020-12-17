import NextHead from 'next/head'
import { CONST } from '../constants'

interface PageHeadProps {
  title: string
  description?: string
  keywords?: string
  url?: string
  ogImage?: string
}

const PageHead = ({
  title,
  description,
  keywords,
  url,
  ogImage,
}: PageHeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
  </NextHead>
)

export default PageHead
