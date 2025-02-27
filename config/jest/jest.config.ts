/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import path from 'path';

const config: Config = {

    clearMocks: true,

    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    roots: [
        "<rootDir>/src/"
    ],
    modulePaths: [
        "<rootDir>/src/"
    ],

    moduleDirectories: ["node_modules", "src"],

    testEnvironment: "jest-fixed-jsdom",

    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
    transform: {
        "^.+\\.tsx?$": "babel-jest",
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.module\\.scss$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^entities/(.*)$': '<rootDir>/src/entities/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1', 
        '^features/(.*)$': '<rootDir>/src/features/$1',
        '^widgets/(.*)$': '<rootDir>/src/widgets/$1'
    },
    globals: {
        __IS_DEV__: true,
        __API_URL__: '',
    }
};

export default config;
