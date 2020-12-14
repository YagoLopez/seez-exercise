import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CONST } from '../constants'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="/font/roboto-v20-latin-regular.woff2"
            as="font"
            crossOrigin="anonymous"
            media="all"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
            as="font"
            crossOrigin="anonymous"
            media="all"
          />
        </Head>
        {/*
        <link
          rel="preload"
          href={`${CONST.CHUCK_NORRIS_JOKES_API_BASE_URL}/random`}
          as="fetch"
          crossOrigin="anonymous"
        />
*/}
        <body
          className="mdc-typography"
          style={{ margin: 0, background: '#f6f6f6', height: '88vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
