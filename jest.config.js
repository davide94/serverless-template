module.exports = {
  collectCoverage: true,
  coverageReporters: ['text'],
  roots: ['<rootDir>/tests'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
}
