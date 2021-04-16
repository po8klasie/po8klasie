import React from 'react';
import * as Sentry from '@sentry/react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { SWRConfig } from 'swr';
import handleError from './api/handleError';
import theme from './styling/theme';
import Routes from './Routes';
import globalStyles from './styling/globalStyles';
import { AnalyticsProvider } from './utils/analytics';

const swrConfig = {
  onError: handleError,
};

const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary fallback="An error has occurred">
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <AnalyticsProvider>
          <SWRConfig value={swrConfig}>
            <Routes />
          </SWRConfig>
        </AnalyticsProvider>
      </ThemeProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
