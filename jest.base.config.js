module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [ '<rootDir>/setupJest.ts' ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/src/test.ts',
    ],
    collectCoverage: true,
    coverageReporters: [ 'html' ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
