import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { environment, isProduction } from '../environments/environment';

export const setupSentry = () => {
  if (isProduction && environment.PUBLIC_SENTRY_DSN)
    Sentry.init({
      dsn: environment.PUBLIC_SENTRY_DSN,
      integrations: [
        new Integrations.BrowserTracing(),
      ],
      tracesSampleRate: 1.0,
    });

};
