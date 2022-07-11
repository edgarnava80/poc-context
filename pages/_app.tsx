import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider initialLikes={pageProps.likes} initialCars={pageProps.cars}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
