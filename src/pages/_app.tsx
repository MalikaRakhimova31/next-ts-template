import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import { ChakraUiThemeProvider } from '@/styles/ChakraUiThemeProvider'
import Layout from '@/components/Layout'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraUiThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraUiThemeProvider>
    </>
  )
}
