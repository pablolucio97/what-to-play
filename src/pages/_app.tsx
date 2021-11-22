
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyle'
import  defaultTheme from '../themes/theme'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
