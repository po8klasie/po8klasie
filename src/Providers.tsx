import React, { ComponentType, FC } from 'react';
import { createPack } from 'react-component-pack';
import { ErrorBoundary } from '@sentry/react';
import { ThemeProvider, ThemeProviderProps } from 'emotion-theming';
import { SWRConfig } from 'swr';
import { AnalyticsProvider } from './utils/externalServices';
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
  AnalyticsProvider,
  withProps(SWRConfig, {
    value: {
      onError: handleError,
    },
  }),
);

export default Providers;
