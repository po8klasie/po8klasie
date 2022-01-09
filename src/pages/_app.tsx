import React, { FC } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'normalize.css';
import '../styling/global.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

const NextMatomoInitalizer = dynamic(() => import('../components/NextMatomoInitializer'), {
  ssr: false,
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>po8klasie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextMatomoInitalizer />
      <Component {...pageProps} />
    </>
  );
};

export default App;
