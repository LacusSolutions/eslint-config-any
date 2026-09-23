import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { TEST, toBlob } from '../../../utils/index.js';

const matchingFileBlobs = toBlob(TEST);

export default defineConfig([
  {
    files: matchingFileBlobs,
    languageOptions: {
      globals: globals.jest,
    },
  },
]);
