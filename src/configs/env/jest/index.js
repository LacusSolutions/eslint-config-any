import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { TEST } from '../../../utils/index.js';

const matchingFilesPattern = [TEST];

export default defineConfig([
  {
    files: matchingFilesPattern,
    languageOptions: {
      globals: globals.vitest,
    },
  },
]);
