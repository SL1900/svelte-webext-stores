module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFiles: [
    'jest-webextension-mock',
    'jest-localstorage-mock'
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest', {
        tsconfig: "<rootDir>/tsconfig-jest.json"
      }
    ]
  },
  transformIgnorePatterns: [
    "node_modules/(?!svelte/.*)"
  ]
};
