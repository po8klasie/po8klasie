import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>po8klasie</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
