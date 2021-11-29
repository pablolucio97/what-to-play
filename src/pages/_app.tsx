
import React from 'react';
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyle'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import defaultTheme from '../themes/theme'
import { Provider as NextAuthGitHubProvider } from 'next-auth/client'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient} >
      <NextAuthGitHubProvider session={pageProps.session} >
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextAuthGitHubProvider>
    </QueryClientProvider >
)}

export default MyApp