import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    files: matchingFileBlobs,
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules,
  },
]);
