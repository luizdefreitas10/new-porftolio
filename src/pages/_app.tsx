import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from "styled-components";
import theme from '../styles/theme'
import AOSWrapper from '../components/AOSWrapper/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AOSWrapper>
        <GlobalStyles />
        <Component {...pageProps} />
      </AOSWrapper>
    </ThemeProvider>
  )
}
