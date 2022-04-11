import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from '../Seo';
import usePosthogPageChangeTracker from '../hooks/usePosthogPageChangeTracker';
import 'normalize.css';
import '../global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  usePosthogPageChangeTracker();
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

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// A page that relies on publicRuntimeConfig must use getInitialProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps.
export const getInitialProps = (): void => {};

export default App;
