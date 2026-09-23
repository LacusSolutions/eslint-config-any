import { importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, toDotted, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    files: matchingFileBlobs,
    plugins: {
      'import-x': importX,
    },
    rules,
  },
]);
