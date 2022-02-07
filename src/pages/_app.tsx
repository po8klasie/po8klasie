import React, { FC } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { DefaultSeo } from '../Seo';
import 'normalize.css';
import '../styling/global.css';

const NextMatomoInitalizer = dynamic(() => import('../components/NextMatomoInitializer'), {
  ssr: false,
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo />
      <NextMatomoInitalizer />
      <Component {...pageProps} />
    </>
  );
};

export default App;
