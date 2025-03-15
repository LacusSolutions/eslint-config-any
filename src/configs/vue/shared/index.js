import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

import { VUE } from '../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [VUE];

export default defineConfig([
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
]);
