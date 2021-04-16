export interface LocalEnvironment {
  REACT_APP_API_URL: string;
  REACT_APP_PUBLIC_SENTRY_DSN: string;
  REACT_APP_MATOMO_BASE_URL: string;
  REACT_APP_MATOMO_SITE_ID: string;
}

export interface Environment {
  API_URL: string;
  PUBLIC_SENTRY_DSN: string;
  MATOMO_BASE_URL: string;
  MATOMO_SITE_ID: string;
}

const prodEnvironment: Environment = window.config;

const devEnvironment: Environment = {
  API_URL: process.env.REACT_APP_API_URL,
  PUBLIC_SENTRY_DSN: process.env.REACT_APP_API_URL,
  MATOMO_BASE_URL: process.env.REACT_APP_MATOMO_BASE_URL,
  MATOMO_SITE_ID: process.env.REACT_APP_MATOMO_SITE_ID,
};

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = isProduction ? prodEnvironment : devEnvironment;
