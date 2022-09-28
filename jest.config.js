module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/tests/mocks/svgrMock.jsx',
  },
  setupFiles: [
    '<rootDir>/tests/setupJest.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTestingLibrary.js',
  ],
  testEnvironment: 'jsdom',
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!(@react-ui-org))'
  ],
};
