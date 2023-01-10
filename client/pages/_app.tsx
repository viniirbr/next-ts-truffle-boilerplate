import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EthereumProvider } from '../src/context/EthereumProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EthereumProvider>
      <Component {...pageProps} />
    </EthereumProvider>
  )
}
