import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    ...eslintCommentsConfigs.recommended,
    files: matchingFileBlobs,
  },
  {
    files: matchingFileBlobs,
    rules,
  },
]);
