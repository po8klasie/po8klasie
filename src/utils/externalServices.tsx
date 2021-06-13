import * as Sentry from '@sentry/react';
import { createInstance, MatomoProvider } from '@datapunt/matomo-tracker-react';
import React, { FC } from 'react';
import { MatomoInstance } from '@datapunt/matomo-tracker-react/lib/types';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { environment, isEnvVarEmpty, isProduction } from '../environments/environment';

const { PUBLIC_SENTRY_DSN, MATOMO_BASE_URL, MATOMO_SITE_ID, GRAPHQL_ENDPOINT } = environment;

// Sentry

export const setupSentry = (): void => {
  if (isProduction && !isEnvVarEmpty('PUBLIC_SENTRY_DSN'))
    Sentry.init({
      dsn: PUBLIC_SENTRY_DSN,
    });
};

// Analytics

export const createMatomoInstance = (): MatomoInstance =>
  createInstance({
    urlBase: MATOMO_BASE_URL, // include trailing slash
    siteId: parseInt(MATOMO_SITE_ID, 10),
    configurations: {
      disableCookies: true,
    },
  });

export const AnalyticsProvider: FC = ({ children }) => {
  if (isEnvVarEmpty('MATOMO_BASE_URL') || isEnvVarEmpty('MATOMO_SITE_ID')) return <>{children}</>;

  const instance = createMatomoInstance();

  return <MatomoProvider value={instance}>{children}</MatomoProvider>;
};

// Apollo Client

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      Sentry.captureException(new Error('GraphQL error'), {
        extra: {
          message,
          locations,
          path,
        },
      }),
    );
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
