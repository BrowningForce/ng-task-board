/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testMatch: ['**/+(*.)+(spec).+(ts)'], // Match test files
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/app/$1',
  },
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-angular-app',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
};

export default config;
