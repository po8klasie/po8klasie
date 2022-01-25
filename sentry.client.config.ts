import * as Sentry from '@sentry/nextjs';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { environment } from './src/environments/environment';

if (environment.APP_FRONTEND_RELEASE) {
  const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE, PUBLIC_SENTRY_DSN } = environment;

  Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    release: APP_FRONTEND_RELEASE,
    environment: APP_ENVIRONMENT,
    integrations: [new TracingIntegrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
