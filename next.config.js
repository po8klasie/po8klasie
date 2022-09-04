/* eslint-disable import/no-extraneous-dependencies */
const { withSentryConfig } = require('@sentry/nextjs');
const withOptimizedImages = require('next-optimized-images');
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const customNextConfig = {
  env: {
    PUBLIC_URL: '',
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
    APP_FRONTEND_RELEASE: process.env.APP_FRONTEND_RELEASE,
    PUBLIC_SENTRY_DSN: process.env.PUBLIC_SENTRY_DSN,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    POSTHOG_API_KEY: process.env.POSTHOG_API_KEY,
    SHOW_LINKS_TO_APP: process.env.SHOW_LINKS_TO_APP,
  },
  experimental: {
    craCompat: true,
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  images: {
    disableStaticImages: true,
  },
  rewrites: () => {
    if (!process.env.API_URL) return [];

    return [
      {
        source: '/api/external/:slug*',
        destination: `${process.env.API_URL}/:slug*`,
      },
    ];
  },

  outputStandalone: true,

  // next-optimized-images options
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
  // sentry options
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = withBundleAnalyzer(withSentryConfig(withOptimizedImages(customNextConfig)));
