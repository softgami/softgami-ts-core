/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./jest.base.config');

module.exports = {
    ...baseConfig,
    roots: [ '<rootDir>/projects/softgami-ts-core' ],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/projects/softgami-ts-core/tsconfig.spec.json',
        },
    },
    coverageDirectory: '<rootDir>/coverage/softgami-ts-core',
};
