import React from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title key='title'>Next.js Template</title>
    </Head>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
