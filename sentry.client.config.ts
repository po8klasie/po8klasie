import * as Sentry from '@sentry/nextjs';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { publicRuntimeConfig } from './src/runtimeConfig';

const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE, PUBLIC_SENTRY_DSN } = publicRuntimeConfig;

if (publicRuntimeConfig.PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    release: APP_FRONTEND_RELEASE,
    environment: APP_ENVIRONMENT,
    integrations: [new TracingIntegrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
