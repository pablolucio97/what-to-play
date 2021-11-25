
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyle'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import defaultTheme from '../themes/theme'



function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ReactQueryDevtools/>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
