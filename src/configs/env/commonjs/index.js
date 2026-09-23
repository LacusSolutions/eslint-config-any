import { defineConfig } from 'eslint/config';

import { CJS, toBlob } from '../../../utils/index.js';

const matchingFileBlobs = toBlob(CJS);

export default defineConfig([
  {
    files: matchingFileBlobs,
    languageOptions: {
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
