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
  exportPathMap: async () => ({
    '/': { page: '/[[...slug]]' },
  }),

  // next-optimized-images options
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
};

module.exports = withOptimizedImages(customNextConfig);
