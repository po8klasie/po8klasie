const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  moduleNameMapper: {
    '\\.module.css$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
