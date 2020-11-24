import * as Sentry from '@sentry/react';
import { environment, isProduction } from '../environments/environment';

export const setupSentry = () => {
  if (isProduction && environment.PUBLIC_SENTRY_DSN)
    Sentry.init({
      dsn: environment.PUBLIC_SENTRY_DSN,
    });
};
