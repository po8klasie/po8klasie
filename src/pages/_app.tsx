import React, { FC, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from '../Seo';
import usePosthogPageChangeTracker from '../hooks/usePosthogPageChangeTracker';
import 'normalize.css';
import '../global.css';
import { queryClientOptions } from '../api/queryClient';
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  usePosthogPageChangeTracker();
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// A page that relies on publicRuntimeConfig must use getInitialProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps.
export const getInitialProps = (): void => {};

export default appWithTranslation(App);
