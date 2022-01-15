import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle/>
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
