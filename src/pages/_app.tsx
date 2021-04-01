import { AppProps } from 'next/app'
import Head from 'next/head'
import { theme } from '../styles/theme'
import '../styles/facebook.css'
import { globalStyles } from '../styles/emotion'
import { ThemeProvider } from '@emotion/react'
// import GlobalStyles from 'styles/global'
// import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bardo.GG</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="shortcut" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="Status league of legends" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
