const path = require(`path`)
const glob = require(`glob`)

const pkgs = glob.sync(`./packages/*`).map(p => p.replace(/^\./, `<rootDir>`))
const distDirs = pkgs.map(p => path.join(p, `dist`))
const collectCoverage = process.env.COVERAGE ? true : false

module.exports = {
  notify: true,
  verbose: true,
  roots: pkgs,
  modulePathIgnorePatterns: distDirs,
  coveragePathIgnorePatterns: distDirs,
  collectCoverage,
  collectCoverageFrom: [
    'packages/**/src/**/*.js',
  ],
  coverageDirectory: './.coverage',
  coverageReporters: [
    'lcov',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testPathIgnorePatterns: [
    `/examples/`,
    `/www/`,
    `/dist/`,
    `/node_modules/`,
    `__tests__/fixtures`,
  ],
  setupTestFrameworkScriptFile: './config/setup-tests.js',
}
