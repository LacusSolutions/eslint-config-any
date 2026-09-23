import arrayFuncPlugin from 'eslint-plugin-array-func';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    ...arrayFuncPlugin.configs.recommended,
    files: matchingFileBlobs,
  },
  {
    files: matchingFileBlobs,
    rules,
  },
]);
