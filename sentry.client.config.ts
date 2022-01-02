import * as Sentry from '@sentry/nextjs';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { environment, isEnvVarEmpty } from './src/environments/environment';

if (!isEnvVarEmpty('PUBLIC_SENTRY_DSN')) {
  const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE, PUBLIC_SENTRY_DSN } = environment;

  Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    release: APP_FRONTEND_RELEASE,
    environment: APP_ENVIRONMENT,
    integrations: [new TracingIntegrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
