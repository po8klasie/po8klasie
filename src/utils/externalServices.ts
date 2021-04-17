import * as Sentry from '@sentry/react';
import { createInstance } from '@datapunt/matomo-tracker-react';
import { environment, isEnvVarEmpty, isProduction } from '../environments/environment';

const { PUBLIC_SENTRY_DSN, MATOMO_BASE_URL, MATOMO_SITE_ID } = environment;

export const setupSentry = (): void => {
  if (isProduction && !isEnvVarEmpty('PUBLIC_SENTRY_DSN'))
    Sentry.init({
      dsn: PUBLIC_SENTRY_DSN,
    });
};

export const matomoClientInstance = createInstance({
  urlBase: MATOMO_BASE_URL, // include trailing slash
  siteId: parseInt(MATOMO_SITE_ID, 10),
  disabled: isEnvVarEmpty('MATOMO_BASE_URL') || isEnvVarEmpty('MATOMO_SITE_ID'),
  configurations: {
    disableCookies: true,
  },
});
