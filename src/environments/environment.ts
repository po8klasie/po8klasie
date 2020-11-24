interface Environment {
  API_URL: string;
  PUBLIC_SENTRY_DSN: string;
}

const prodEnvironment: Environment = (window as any).config;

const devEnvironment: Environment = {
  API_URL: process.env.REACT_APP_API_URL as string,
  PUBLIC_SENTRY_DSN: '',
};

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = isProduction ? prodEnvironment : devEnvironment;
