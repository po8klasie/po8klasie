import React, { ComponentType, FC } from 'react';
import { createPack } from 'react-component-pack';
import { ErrorBoundary } from '@sentry/react';
import { ThemeProvider, ThemeProviderProps } from 'emotion-theming';
import { MatomoProvider } from '@datapunt/matomo-tracker-react';
import { MatomoProviderProps } from '@datapunt/matomo-tracker-react/lib/MatomoProvider';
import { SWRConfig } from 'swr';
import { matomoClientInstance } from './utils/externalServices';
import theme, { Theme } from './styling/theme';
import handleError from './api/handleError';

const withProps = <T extends unknown>(Provider: ComponentType<T>, props: T): FC => ({
  children,
}) => <Provider {...props}>{children}</Provider>;

const Providers = createPack(
  withProps(ErrorBoundary, {
    fallback: 'An error has occurred',
  }),
  withProps<ThemeProviderProps<Theme>>(ThemeProvider, {
    theme,
  }),
  withProps<MatomoProviderProps>(MatomoProvider, {
    value: matomoClientInstance,
  }),
  withProps(SWRConfig, {
    value: {
      onError: handleError,
    },
  }),
);

export default Providers;
