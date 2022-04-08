import * as Sentry from '@sentry/nextjs';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

if (publicRuntimeConfig.APP_FRONTEND_RELEASE) {
  const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE, PUBLIC_SENTRY_DSN } = publicRuntimeConfig;

  Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    release: APP_FRONTEND_RELEASE,
    environment: APP_ENVIRONMENT,
    integrations: [new TracingIntegrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
