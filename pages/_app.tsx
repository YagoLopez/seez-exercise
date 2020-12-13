import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

import '@material/button/dist/mdc.button.css'
import '@material/ripple/dist/mdc.ripple.css'
import '@material/list/dist/mdc.list.css'
import '@material/linear-progress/dist/mdc.linear-progress.css'
import '@material/typography/dist/mdc.typography.css'
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css'
import '@material/line-ripple/dist/mdc.line-ripple.css'
import '@material/top-app-bar/dist/mdc.top-app-bar.css'
import '@material/icon-button/dist/mdc.icon-button.css'
import '@material/card/dist/mdc.card.css'
import '@material/theme/dist/mdc.theme.css'
import '@material/form-field/dist/mdc.form-field.css'
import '@rmwc/icon/icon.css'
import '@rmwc/theme/theme.css'
import '@rmwc/tooltip/tooltip.css'
import '@material/dialog/dist/mdc.dialog.css'
import '@material/drawer/dist/mdc.drawer.css'
import '@rmwc/select/select.css'
import '@material/select/dist/mdc.select.css'
import '@material/menu/dist/mdc.menu.css'
import '@material/menu-surface/dist/mdc.menu-surface.css'
import '@material/elevation/dist/mdc.elevation.css'
import '../public/styles/responsive.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
