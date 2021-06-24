
import type { AppProps } from 'next/app'
import {UserContextProvider} from '../contexts/userContextToDo'
import '../styles/globals.scss'
import './index.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
    <Component {...pageProps} />
    </UserContextProvider>
  )
 
}
export default MyApp
