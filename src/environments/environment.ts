export interface LocalEnvironment {
  REACT_APP_GRAPHQL_ENDPOINT: string;
  REACT_APP_APP_ENVIRONMENT: string;
  REACT_APP_APP_RELEASE: string;
  REACT_APP_PUBLIC_SENTRY_DSN: string;
  REACT_APP_MATOMO_BASE_URL: string;
  REACT_APP_MATOMO_SITE_ID: string;
}

export interface Environment {
  GRAPHQL_ENDPOINT: string;
  APP_ENVIRONMENT: string;
  APP_RELEASE: string;
  PUBLIC_SENTRY_DSN: string;
  MATOMO_BASE_URL: string;
  MATOMO_SITE_ID: string;
}

const prodEnvironment: Environment = window.config;

const devEnvironment: Environment = {
  GRAPHQL_ENDPOINT: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  APP_RELEASE: process.env.REACT_APP_APP_RELEASE,
  APP_ENVIRONMENT: process.env.REACT_APP_APP_ENVIRONMENT,
  PUBLIC_SENTRY_DSN: process.env.REACT_APP_PUBLIC_SENTRY_DSN,
  MATOMO_BASE_URL: process.env.REACT_APP_MATOMO_BASE_URL,
  MATOMO_SITE_ID: process.env.REACT_APP_MATOMO_SITE_ID,
};

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = isProduction ? prodEnvironment : devEnvironment;

export const isEnvVarEmpty = (name: keyof Environment): boolean =>
  !environment[name] || environment[name] === `\${${name}}`;

export const isAnyEnvVarEmpty = (names: (keyof Environment)[]): boolean =>
  names.some(isEnvVarEmpty);
