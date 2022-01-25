export interface LocalEnvironment {
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
  NEXT_PUBLIC_APP_ENVIRONMENT: string;
  NEXT_PUBLIC_APP_FRONTEND_RELEASE: string;
  NEXT_PUBLIC_PUBLIC_SENTRY_DSN: string;
  NEXT_PUBLIC_MATOMO_BASE_URL: string;
  NEXT_PUBLIC_MATOMO_SITE_ID: string;
}

export interface Environment {
  GRAPHQL_ENDPOINT: string;
  APP_ENVIRONMENT: string;
  APP_FRONTEND_RELEASE: string;
  PUBLIC_SENTRY_DSN: string;
  MATOMO_BASE_URL: string;
  MATOMO_SITE_ID: string;
}

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = {
  GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  APP_FRONTEND_RELEASE: process.env.NEXT_PUBLIC_APP_FRONTEND_RELEASE,
  APP_ENVIRONMENT: process.env.NEXT_PUBLIC_APP_ENVIRONMENT,
  PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_PUBLIC_SENTRY_DSN,
  MATOMO_BASE_URL: process.env.NEXT_PUBLIC_MATOMO_BASE_URL,
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
};
