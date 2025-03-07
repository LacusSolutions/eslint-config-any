import globals from 'globals';
import tsEslint from 'typescript-eslint';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.vue'];

/* @typedef {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tsEslint.parser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules,
  },
];
