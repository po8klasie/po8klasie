import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from '../Seo';
import 'normalize.css';
import '../global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
};

export default App;
