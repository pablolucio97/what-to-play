
import { Provider as NextAuthGitHubProvider } from "next-auth/client";
import { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";

import { queryClient } from "../services/queryClient";
import { GlobalStyles } from "../styles/GlobalStyle";
import defaultTheme from "../themes/theme";

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
  )
}

export default MyApp
