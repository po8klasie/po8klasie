export interface LocalEnvironment {
  REACT_APP_GRAPHQL_ENDPOINT: string;
  REACT_APP_APP_ENVIRONMENT: string;
  REACT_APP_APP_FRONTEND_RELEASE: string;
  REACT_APP_PUBLIC_SENTRY_DSN: string;
  REACT_APP_MATOMO_BASE_URL: string;
  REACT_APP_MATOMO_SITE_ID: string;
}

export interface Environment {
  GRAPHQL_ENDPOINT: string;
  APP_ENVIRONMENT: string;
  APP_FRONTEND_RELEASE: string;
  PUBLIC_SENTRY_DSN: string;
  MATOMO_BASE_URL: string;
  MATOMO_SITE_ID: string;
}

const getProdEnvironment = (): Environment => window.config;

const getDevEnvironment = (): Environment => ({
  APP_FRONTEND_RELEASE: 'v0.0.0',
  APP_ENVIRONMENT: 'local',
  GRAPHQL_ENDPOINT: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  PUBLIC_SENTRY_DSN: process.env.REACT_APP_PUBLIC_SENTRY_DSN,
  MATOMO_BASE_URL: process.env.REACT_APP_MATOMO_BASE_URL,
  MATOMO_SITE_ID: process.env.REACT_APP_MATOMO_SITE_ID,
});

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = isProduction ? getProdEnvironment() : getDevEnvironment();

export const isEnvVarEmpty = (name: keyof Environment): boolean =>
  !environment[name] || environment[name] === `\${${name}}`;

export const isAnyEnvVarEmpty = (names: (keyof Environment)[]): boolean =>
  names.some(isEnvVarEmpty);
