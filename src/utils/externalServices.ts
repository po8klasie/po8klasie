import * as Sentry from '@sentry/react';
import { createInstance } from '@datapunt/matomo-tracker-react';
import { environment, isProduction } from '../environments/environment';

const { PUBLIC_SENTRY_DSN, MATOMO_BASE_URL, MATOMO_SITE_ID } = environment;

export const setupSentry = (): void => {
  if (isProduction && PUBLIC_SENTRY_DSN)
    Sentry.init({
      dsn: PUBLIC_SENTRY_DSN,
    });
};

export const matomoClientInstance = createInstance({
  urlBase: MATOMO_BASE_URL, // include trailing slash
  siteId: parseInt(MATOMO_SITE_ID, 10),
  disabled: !MATOMO_BASE_URL || !MATOMO_SITE_ID,
  configurations: {
    disableCookies: true,
  },
});
