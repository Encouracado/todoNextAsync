
import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import './index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
