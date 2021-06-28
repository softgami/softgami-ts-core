/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./jest.base.config');

module.exports = {
    ...baseConfig,
    roots: [ '<rootDir>/projects/softgami-ts-core-tester' ],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/projects/softgami-ts-core-tester/tsconfig.spec.json',
        },
    },
    coverageDirectory: '<rootDir>/coverage/softgami-ts-core-tester',
    setupFilesAfterEnv: [ '<rootDir>/projects/softgami-ts-core-tester/src/test.ts' ],
    testPathIgnorePatterns: [
        '<rootDir>/projects/softgami-ts-core-tester/src/test.ts',
    ],
    modulePaths: [ '<rootDir>/dist' ],
};
