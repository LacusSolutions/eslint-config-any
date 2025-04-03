import arrayFuncPlugin from 'eslint-plugin-array-func';
import { defineConfig } from 'eslint/config';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];
const baseArrayFuncConfig = arrayFuncPlugin.configs.recommended;

export default defineConfig([
  {
    ...baseArrayFuncConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseArrayFuncConfig.rules,
      ...rules,
    },
  },
]);
