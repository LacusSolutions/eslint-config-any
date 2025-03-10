import globals from 'globals';

import { TEST } from '../../../utils/index.js';

const matchingFilesPattern = [TEST];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    languageOptions: {
      globals: globals.vitest,
    },
  },
];
