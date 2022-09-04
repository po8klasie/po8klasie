import getConfig from 'next/config';
const { publicRuntimeConfig: originalPublicRuntimeConfig } = getConfig();

export interface IPublicRuntimeConfig {
  API_URL: string;
  APP_ENVIRONMENT: string;
  APP_FRONTEND_RELEASE: string;
  PUBLIC_SENTRY_DSN: string;
  MAPBOX_ACCESS_TOKEN: string;
  POSTHOG_API_KEY: string;
  SHOW_LINKS_TO_APP: string;
}

const emptyPublicRuntimeConfig: IPublicRuntimeConfig = {
  API_URL: '',
  APP_ENVIRONMENT: '',
  APP_FRONTEND_RELEASE: '',
  PUBLIC_SENTRY_DSN: '',
  MAPBOX_ACCESS_TOKEN: '',
  POSTHOG_API_KEY: '',
  SHOW_LINKS_TO_APP: '',
};

export const isFeatureFlagEnabled = (flagValue: string) => flagValue === 'true';

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// We use publicRuntimeConfig, so every page which imports this file
// must use getInitialProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps
// (including non-custom error pages). If page uses Automatic Static Optimization empty values will be provided.
export const publicRuntimeConfig: IPublicRuntimeConfig =
  originalPublicRuntimeConfig ?? emptyPublicRuntimeConfig;

export const serverRuntimeConfig = {};
