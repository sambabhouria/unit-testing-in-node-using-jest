import type { Config } from 'jest'
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 80,
      lines: 80,
      statements: 90,
    },
  },
}

export default config
