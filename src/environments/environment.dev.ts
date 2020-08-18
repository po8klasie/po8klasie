import { Environment } from './environment';

export const environment: Environment = {
  API_URL: process.env.REACT_APP_API_URL as string,
  PUBLIC_SENTRY_DSN: '',
};
