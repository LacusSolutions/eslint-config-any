import { defineConfig } from 'eslint/config';

import { CJS } from '../../../utils/index.js';

const matchingFilesPattern = [CJS];

export default defineConfig([
  {
    files: matchingFilesPattern,
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]);
