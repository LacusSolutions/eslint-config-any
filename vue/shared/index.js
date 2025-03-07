import globals from 'globals';
import tsEslint from 'typescript-eslint';

import rules from './rules/index.js';

// View documentation: https://eslint.vuejs.org/

/* @typedef {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
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
