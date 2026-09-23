import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    files: matchingFileBlobs,
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules,
  },
]);
