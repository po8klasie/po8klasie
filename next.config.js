const { withSentryConfig } = require('@sentry/nextjs');
const withOptimizedImages = require('next-optimized-images');

const isProduction = process.env.NODE_ENV === 'production';

const customNextConfig = {
  env: {
    PUBLIC_URL: '',
  },
  publicRuntimeConfig: {
    API_URL: isProduction ? process.env.API_URL : '/api/external',
    APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
    APP_FRONTEND_RELEASE: process.env.APP_FRONTEND_RELEASE,
    PUBLIC_SENTRY_DSN: process.env.PUBLIC_SENTRY_DSN
  },
  experimental: {
    craCompat: true,
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  images: {
    disableStaticImages: true,
  },
  exportPathMap: async (defaultPathMap) => ({
    ...defaultPathMap,
    '/warszawa/legacy': { page: '/warszawa/legacy/[[...slug]]' },
  }),

  rewrites: () => {
    if (!process.env.API_URL || isProduction) return [];
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
};

module.exports = withSentryConfig(withOptimizedImages(customNextConfig));
