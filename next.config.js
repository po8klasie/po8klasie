const { withSentryConfig } = require('@sentry/nextjs');
const withOptimizedImages = require('next-optimized-images');

const customNextConfig = {
  env: {
    PUBLIC_URL: '',
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
