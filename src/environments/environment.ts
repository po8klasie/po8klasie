interface Environment {
  API_URL: string;
  PUBLIC_SENTRY_DSN: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prodEnvironment: Environment = (window as any).config;

const devEnvironment: Environment = {
  API_URL: 'https://test.warsawlo.pl/api',
  PUBLIC_SENTRY_DSN: '',
};

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = devEnvironment;
