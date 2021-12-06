import * as Sentry from '@sentry/nextjs';
import { environment, isEnvVarEmpty } from './src/environments/environment';

const SENTRY_DSN = environment.PUBLIC_SENTRY_DSN;

if (!isEnvVarEmpty('PUBLIC_SENTRY_DSN'))
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
  });
